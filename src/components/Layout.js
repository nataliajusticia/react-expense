const Layout = ({ children }) => {
  return (
    <section className="container max-w-screen-md p-4 mx-auto first:mt-8">
      <div className="p-8 bg-white rounded-xl">{children}</div>
    </section>
  );
};

export default Layout;
