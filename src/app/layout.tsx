import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <StyledComponentsRegistry>
          <div>Hearder</div>
          {children}
          <div>Footer</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
