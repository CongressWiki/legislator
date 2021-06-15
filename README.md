<h1 align="center">
  Legislator
</h1>

Static website for bills and amendments on USACounts.com

[Google Analytics](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/p262206610/reports/defaulthome?params=_u..nav%3Ddefault) | [Google Search Console](https://search.google.com/search-console?resource_id=sc-domain%3Ausacounts.com)

## 🚀 Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    yarn develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## Styling

- Text line length: Research has shown that the ideal line length is about 65 characters. Anywhere between 45 and 85 is generally seen as acceptable, in the context of a roman alphabet. Reading is a complex process, and we should strive to make it as easy as possible. From [joshwcomeau's blog](https://www.joshwcomeau.com/css/full-bleed/)

## Fonts

There are four font families being used for this site. All fonts were created by Matthew Butterick and licenses were purchased from [typographyforlawyers.com](https://typographyforlawyers.com/). Please read the [font license](./docs/fonts/MB-Type-Font-License.pdf).

| Font Family   | Type         | Styles                                                                        | References                                                                                                                                                             |
| ------------- | ------------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Advocate      | Display font | [Base, Mid, Slab, Slab & Mid] x [C41, C43, C45, C51, C53, C55, C61, C63, C65] | [Website](https://typographyforlawyers.com/advocate.html) - [Demo](https://mbtype.com/fonts/advocate/) - [PDF](./docs/fonts/advocate-type-specimen.pdf)                |
| Century Supra | Non-Sans     | C3, C4, T3, T4                                                                | [Website](https://typographyforlawyers.com/century-supra.html) - [Demo](https://mbtype.com/fonts/century-supra/) - [PDF](./docs/fonts/century-supra-type-specimen.pdf) |
| Concourse     | Sans         | C2, C3, C4, C6, C7, C8, T2, T3, T4, T6, T7, T8                                | [Website](https://typographyforlawyers.com/concourse.html) - [Demo](https://mbtype.com/fonts/concourse/) - [PDF](./docs/fonts/concourse-type-specimen.pdf.pdf)         |
| Triplicate    | Non-Sans     | Not currently in project                                                      | [Website](https://typographyforlawyers.com/triplicate.html) - [Demo](https://mbtype.com/fonts/triplicate/) - [PDF](./docs/fonts/triplicate-type-specimen.pdf)          |

## Sitemap & SEO

- [Look into this new plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap/?=sitemap)
- [Submit sitemap to google](https://support.google.com/webmasters/answer/7451001)
- [Nice blog post by Josh](https://www.joshwcomeau.com/gatsby/seo-friendly-sitemap/)

## Resources

- [Bill Text types and other useful bill info](https://www.govinfo.gov/help/bills)

## Auth0

Test URL:

```url
https://usacounts.us.auth0.com/login?client=9phT8e22TlF2r5mDaOOU5bHj8FTHWGji&protocol=oauth2&response_type=token%20id_token&redirect_uri=http://localhost:8000/callback&scope=openid%20profile
```

## Domains

- billstatus.us
- stateofthebill.com
- stateofthebill.us
- billhopper.us
- congressvote.us
- heedcall.com
- heedcall.org
- heedcall.us
- heedthecall.us
- rollcall.us
- rollcallvotes.us
- theusacounts.com
- **usacounts.com** - active
- usacounts.org

### How to bump Node's memory

Default is 512mb

```shell
node --max-old-space-size=1024 index.js #increase to 1gb
node --max-old-space-size=2048 index.js #increase to 2gb
node --max-old-space-size=3072 index.js #increase to 3gb
node --max-old-space-size=4096 index.js #increase to 4gb
node --max-old-space-size=5120 index.js #increase to 5gb
node --max-old-space-size=6144 index.js #increase to 6gb
node --max-old-space-size=7168 index.js #increase to 7gb
node --max-old-space-size=8192 index.js #increase to 8gb
```

[Reference](https://medium.com/@vuongtran/how-to-solve-process-out-of-memory-in-node-js-5f0de8f8464c)