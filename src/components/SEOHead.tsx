
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "CR6 Consultoria - Inteligência Fiscal e Consultoria Tributária em Erechim/RS",
  description = "CR6 Consultoria oferece serviços especializados em consultoria tributária, planejamento fiscal e BPO empresarial. Escritório com anos de experiência em Erechim/RS.",
  keywords = "consultoria tributária, planejamento tributário, BPO, terceirização contábil, Erechim, RS, inteligência fiscal",
  canonicalUrl = "https://www.cr6consultoria.com.br",
  ogImage = "https://www.cr6consultoria.com.br/logo-cr6.png"
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rita Eliane Cervinski" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="CR6 Consultoria" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
