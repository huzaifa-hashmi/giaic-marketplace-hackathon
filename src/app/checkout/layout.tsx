export default function CheckoutLayout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
}
