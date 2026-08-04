import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("portfolio smoke tests", () => {
  test("homepage loads with analyst positioning", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Lochanreddy Mallakunta",
    );
    await expect(page.getByRole("link", { name: "View Projects" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Email/i }).first()).toHaveAttribute(
      "href",
      "mailto:lochanreddy.m64@gmail.com",
    );
  });

  test("projects page loads and filters update results", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.getByRole("heading", { name: "Project library" })).toBeVisible();
    await page.getByRole("link", { name: "Fintech", exact: true }).click();
    await expect(page).toHaveURL(/domain=Fintech/);
    await expect(page.getByText(/Showing \d+ project/)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "DigiPae Payment and Product Analytics" }),
    ).toBeVisible();
  });

  test("project detail page loads", async ({ page }) => {
    await page.goto("/projects/digipae-payment-product-analytics");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "DigiPae Payment and Product Analytics",
      }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Business problem" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Analysis and approach" }),
    ).toBeVisible();
  });

  test("unknown project slug returns 404", async ({ page }) => {
    const response = await page.goto("/projects/does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
  });

  test("resume download is available when PDF exists", async ({ page }) => {
    await page.goto("/resume");
    await expect(page.getByText(/Resume PDF is available/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /Download Resume/i })).toHaveAttribute(
      "href",
      "/resume/Lochanreddy-Mallakunta-Resume.pdf",
    );
  });

  test("contact form has required fields", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator('form[name="contact"]')).toBeVisible();
    await expect(page.locator("#name")).toHaveAttribute("required", "");
    await expect(page.locator("#email")).toHaveAttribute("required", "");
    await expect(page.locator("#message")).toHaveAttribute("required", "");
    await expect(page.locator('input[name="form-name"]')).toHaveValue("contact");
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();
    await page.getByRole("button", { name: "Close menu", exact: true }).click();
    await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toHaveCount(0);
  });

  test("homepage has no serious accessibility violations", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test("project detail has no serious accessibility violations", async ({ page }) => {
    await page.goto("/projects/digipae-payment-product-analytics");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
