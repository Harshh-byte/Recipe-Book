import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url, schema }) => {
  const siteName = "Recipe Book";
  const fullTitle = `${title} | ${siteName}`;
  const defaultDescription =
    "A comprehensive platform to discover, curate, and share your favorite recipes. Elevate your cooking experience with intuitive culinary management.";
  const defaultUrl = window.location.origin + window.location.pathname;
  const defaultImage = "/Assets/favicon.png";
  const canonicalUrl = url || defaultUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="application-name" content={siteName} />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      <meta property="twitter:image" content={image || defaultImage} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
