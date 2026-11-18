export function PrimaryButton({ children, href = "#contact", className = "",download }) {
  return <a href={href} download={download} className={`gradient-button ${className}`}>{children}</a>;
}
export function OutlineButton({ children, href = "#", className = "", download}) {
  return <a href={href} download={download} className={`outline-button ${className}`}>{children}</a>;
}