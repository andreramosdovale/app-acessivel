import { render, screen } from "@testing-library/react";
import Home from "../../../src/app/page";
import "@testing-library/jest-dom";

describe("Home Component", () => {
  it("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "https://nextjs.org/icons/next.svg");
  });

  it("renders the 'Get started' text", () => {
    render(<Home />);
    const getStartedText = screen.getByText(/Get started by editing/i);
    expect(getStartedText).toBeInTheDocument();
  });

  it("renders the 'Deploy now' link", () => {
    render(<Home />);
    const deployLink = screen.getByRole("link", { name: /Deploy now/i });
    expect(deployLink).toBeInTheDocument();
    expect(deployLink).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com")
    );
  });

  it("renders the 'Read our docs' link", () => {
    render(<Home />);
    const docsLink = screen.getByRole("link", { name: /Read our docs/i });
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs")
    );
  });

  it("renders the footer with the correct links", () => {
    render(<Home />);

    const learnLink = screen.getByRole("link", { name: /Learn/i });
    expect(learnLink).toBeInTheDocument();
    expect(learnLink).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/learn")
    );

    const examplesLink = screen.getByRole("link", { name: /Examples/i });
    expect(examplesLink).toBeInTheDocument();
    expect(examplesLink).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/templates")
    );

    const goToNextLink = screen.getByRole("link", {
      name: /Go to nextjs.org/i,
    });
    expect(goToNextLink).toBeInTheDocument();
    expect(goToNextLink).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org")
    );
  });
});
