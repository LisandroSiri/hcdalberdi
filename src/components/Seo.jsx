import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords = 'concejo deliberante, alberdi, concejales, legislativo',
    url = 'https://hcdalberdi.com.ar',
    image = 'https://hcdalberdi.com.ar/logo-consejo.webp',
    type = 'website',
    publishedTime,
    modifiedTime,
    author
}) => {
    const siteTitle = 'Honorable Concejo Deliberante de Alberdi';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = 'Portal oficial del Honorable Concejo Deliberante de Alberdi. Conocé la labor legislativa de nuestros concejales.';
    const metaDescription = description || defaultDescription;

    return (
        <Helmet>
            {/* Título y descripción */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="es_AR" />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Schema.org para artículos */}
            {type === 'article' && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": fullTitle,
                        "description": metaDescription,
                        "image": image,
                        "datePublished": publishedTime,
                        "dateModified": modifiedTime || publishedTime,
                        "author": {
                            "@type": "Person",
                            "name": author || "HCD Alberdi"
                        }
                    })}
                </script>
            )}

            {/* Schema.org para perfiles */}
            {type === 'profile' && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": title,
                        "description": metaDescription,
                        "image": image,
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Honorable Concejo Deliberante de Alberdi"
                        }
                    })}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;