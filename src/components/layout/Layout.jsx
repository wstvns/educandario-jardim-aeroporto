import Header from './Header';
import Footer from './Footer';
import { FloatingContacts } from '@/components/ui/floating-contacts';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingContacts />
    </div>
  );
};

export default Layout;

