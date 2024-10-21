import Slidebar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn= {firstName :"sandalu" , LastName:"Ekanayaka"}
  return (
<main className="flex h-screen w-full font-inter">
    {/* <Slidebar{loggedIn}/> */}
    {children}
</main>
  );
}
