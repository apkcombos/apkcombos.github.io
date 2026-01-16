import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>Last updated: January 16, 2026</p>
          <p>At apkcombos, accessible from apkcombos.github.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by apkcombos and how we use it.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Log Files</h2>
          <p>apkcombos follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cookies and Web Beacons</h2>
          <p>Like any other website, apkcombos uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Google DoubleClick DART Cookie</h2>
          <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to apkcombos and other sites on the internet.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Privacy Policies</h2>
          <p>You may consult this list to find the Privacy Policy for each of the advertising partners of apkcombos.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Consent</h2>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;