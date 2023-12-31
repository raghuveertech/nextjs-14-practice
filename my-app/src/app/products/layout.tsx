export const metadata = {
  title: "Products Page",
  description: "Products Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Featured Products List</h2>
      <p>Featured Product 1</p>
      <p>Featured Product 2</p>
      <p>Featured Product 3</p>
      <p>Featured Product 4</p>
    </>
  );
}
