import * as React from "react";

interface WelcomeEmailProps {
  // Optional props for personalization
  previewText?: string;
}

/**
 * Welcome email template for new newsletter subscribers
 * Designed with inline styles for maximum email client compatibility
 */
export function WelcomeEmail({ 
  previewText = "Welcome to AgentDepot - your go-to directory for AI coding agents" 
}: WelcomeEmailProps): React.ReactElement {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to AgentDepot</title>
        {/* Preview text - hidden but shown in email clients */}
        <style>{`
          /* Reset styles */
          body { margin: 0; padding: 0; }
          .preview-text { display: none; max-height: 0; overflow: hidden; }
        `}</style>
      </head>
      <body style={{
        backgroundColor: "#0A0A0A",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        margin: 0,
        padding: 0,
      }}>
        {/* Hidden preview text for email clients */}
        <div className="preview-text" style={{ display: "none", maxHeight: 0, overflow: "hidden" }}>
          {previewText}
        </div>

        {/* Main container */}
        <table 
          role="presentation" 
          width="100%" 
          cellPadding={0} 
          cellSpacing={0} 
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <tbody>
            <tr>
              <td align="center" style={{ padding: "40px 20px" }}>
                {/* Content card */}
                <table 
                  role="presentation" 
                  width="100%" 
                  style={{ 
                    maxWidth: "560px",
                    backgroundColor: "#1A1A1A",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: "48px 40px" }}>
                        {/* Logo / Brand */}
                        <table role="presentation" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style={{ paddingBottom: "32px" }}>
                                <h1 style={{
                                  margin: 0,
                                  fontSize: "28px",
                                  fontWeight: "bold",
                                  color: "#FFFFFF",
                                  letterSpacing: "-0.5px",
                                }}>
                                  🚀 AgentDepot
                                </h1>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* Welcome message */}
                        <table role="presentation" width="100%">
                          <tbody>
                            <tr>
                              <td style={{ paddingBottom: "24px" }}>
                                <h2 style={{
                                  margin: 0,
                                  fontSize: "24px",
                                  fontWeight: "600",
                                  color: "#FFFFFF",
                                  textAlign: "center",
                                }}>
                                  Welcome to the Weekly Drop! 🎉
                                </h2>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingBottom: "24px" }}>
                                <p style={{
                                  margin: 0,
                                  fontSize: "16px",
                                  lineHeight: "1.6",
                                  color: "#A1A1AA",
                                  textAlign: "center",
                                }}>
                                  Thanks for subscribing! You&apos;re now part of 5,000+ developers
                                  who get the best AI coding agents delivered straight to their inbox.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* What to expect */}
                        <table 
                          role="presentation" 
                          width="100%" 
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            marginBottom: "32px",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: "24px" }}>
                                <h3 style={{
                                  margin: "0 0 16px 0",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                  color: "#FFFFFF",
                                }}>
                                  📬 What to expect:
                                </h3>
                                <ul style={{
                                  margin: 0,
                                  padding: "0 0 0 20px",
                                  fontSize: "14px",
                                  lineHeight: "2",
                                  color: "#A1A1AA",
                                }}>
                                  <li><strong style={{ color: "#FFFFFF" }}>Weekly curated agents</strong> - Hand-picked rules and templates</li>
                                  <li><strong style={{ color: "#FFFFFF" }}>New tool updates</strong> - Cursor, Windsurf, Claude Code & more</li>
                                  <li><strong style={{ color: "#FFFFFF" }}>Pro tips</strong> - Level up your AI-assisted coding</li>
                                  <li><strong style={{ color: "#FFFFFF" }}>No spam</strong> - Just high-signal content</li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* CTA Button */}
                        <table role="presentation" width="100%" style={{ marginBottom: "32px" }}>
                          <tbody>
                            <tr>
                              <td align="center">
                                <a
                                  href="https://agentdepot.dev"
                                  style={{
                                    display: "inline-block",
                                    padding: "14px 36px",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    color: "#000000",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "10px",
                                    textDecoration: "none",
                                    textAlign: "center",
                                  }}
                                >
                                  Explore Agents →
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* Tool badges */}
                        <table role="presentation" width="100%" style={{ marginBottom: "24px" }}>
                          <tbody>
                            <tr>
                              <td align="center">
                                <p style={{
                                  margin: "0 0 16px 0",
                                  fontSize: "14px",
                                  color: "#71717A",
                                }}>
                                  Discover agents for:
                                </p>
                                <div style={{ textAlign: "center" }}>
                                  {["Cursor", "Windsurf", "Claude Code", "Replit", "MCP"].map((tool) => (
                                    <span
                                      key={tool}
                                      style={{
                                        display: "inline-block",
                                        padding: "6px 12px",
                                        margin: "4px",
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        color: "#FFFFFF",
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "6px",
                                      }}
                                    >
                                      {tool}
                                    </span>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* Signature */}
                        <table role="presentation" width="100%">
                          <tbody>
                            <tr>
                              <td style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "24px" }}>
                                <p style={{
                                  margin: 0,
                                  fontSize: "14px",
                                  color: "#71717A",
                                  textAlign: "center",
                                }}>
                                  Happy coding! 🎯
                                  <br />
                                  <span style={{ color: "#A1A1AA" }}>The AgentDepot Team</span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Footer */}
                <table role="presentation" width="100%" style={{ maxWidth: "560px", marginTop: "24px" }}>
                  <tbody>
                    <tr>
                      <td align="center">
                        <p style={{
                          margin: 0,
                          fontSize: "12px",
                          color: "#52525B",
                          lineHeight: "1.6",
                        }}>
                          You&apos;re receiving this because you subscribed to AgentDepot.
                          <br />
                          <a 
                            href="https://agentdepot.dev" 
                            style={{ color: "#71717A", textDecoration: "underline" }}
                          >
                            agentdepot.dev
                          </a>
                          {" · "}
                          <a 
                            href="https://twitter.com/agentdepot" 
                            style={{ color: "#71717A", textDecoration: "underline" }}
                          >
                            Twitter
                          </a>
                          {" · "}
                          <a 
                            href="https://github.com/agentdepot" 
                            style={{ color: "#71717A", textDecoration: "underline" }}
                          >
                            GitHub
                          </a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}

export default WelcomeEmail;
