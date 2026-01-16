import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>Last updated: January 16, 2026</p>
          <p>Welcome to apkcombos.github.io!</p>
          <p>These terms and conditions outline the rules and regulations for the use of apkcombos.github.io's Website, located at apkcombos.github.io.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">License</h2>
          <p>Unless otherwise stated, apkcombos.github.io and/or its licensors own the intellectual property rights for all material on apkcombos.github.io. All intellectual property rights are reserved. You may access this from apkcombos.github.io for your own personal use subjected to restrictions set in these terms and conditions.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">User Comments</h2>
          <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. apkcombos.github.io does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of apkcombos.github.io, its agents and/or affiliates.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Hyperlinking to our Content</h2>
          <p>The following organizations may link to our Website without prior written corporate approval: Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;