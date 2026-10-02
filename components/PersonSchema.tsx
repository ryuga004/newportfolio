import { siteUrl } from "@/utils/site";
import type { SiteContent } from "@/utils/content/types";
import type { Locale } from "@/utils/content/locale";

export default function PersonSchema({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.profile.name,
    jobTitle: content.profile.role,
    description: content.meta.description,
    email: `mailto:${content.profile.email}`,
    url: `${siteUrl}/${locale}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: content.profile.location,
    },
    sameAs: content.socials
      .map((social) => social.href)
      .concat(content.codingProfiles.map((profile) => profile.href)),
    worksFor: content.experience.length
      ? { "@type": "Organization", name: content.experience[0].org }
      : undefined,
    alumniOf: content.education.length
      ? {
          "@type": "CollegeOrUniversity",
          name: content.education[0].org,
        }
      : undefined,
    knowsAbout: content.skills.flatMap((group) => group.items),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
