/**
 * PowerplAI Sports — footer
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact Us' },
  ];

  function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer
      style={{
        background: '#0D0D0D',
        borderTop: '1px solid #2A2A2A',
        padding: '48px',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '32px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
                fontSize: '28px',
                letterSpacing: '0.01em',
                color: '#FF6B00',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              PowerplAI Sports
            </div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                color: '#8a8a8a',
                lineHeight: 1.6,
                maxWidth: '280px',
              }}
            >
              Harnessing the power of artificial intelligence to transform athletic performance and redefine the future of sport.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8a8a8a',
                marginBottom: '16px',
              }}
            >
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#d4d4d4',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B00')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#d4d4d4')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8a8a8a',
                marginBottom: '16px',
              }}
            >
              Contact
            </div>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'transparent',
                border: '2px solid #FF6B00',
                color: '#FF6B00',
                borderRadius: '9999px',
                padding: '12px 24px',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                transition: 'background 150ms, color 150ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FF6B00';
                e.currentTarget.style.color = '#0D0D0D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#FF6B00';
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #2A2A2A',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              color: '#8a8a8a',
            }}
          >
            © {year} PowerplAI Sports. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  color: '#8a8a8a',
                  textDecoration: 'none',
                  transition: 'color 150ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#d4d4d4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8a8a8a')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
