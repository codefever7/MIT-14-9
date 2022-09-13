/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const locales = require('./src/constants/locales')
const path = require('path')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      })
    })

    resolve()
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      // Object.keys(locales).map(lang => {
      //   const localizedPath = locales[lang].default ? '' : locales[lang].path

      //   // return createPage({
      //   //   path: localizedPath,
      //   //   context: {
      //   //     locale: lang,
      //   //     previous,
      //   //     next,
      //   //   },
      //   // })
      //   return createPage({
      //     path: `/news/${localizedPath}${post.node.frontmatter.path}`,
      //     component: blogPostTemplate,
      //     context: { previous, next, locale: lang },
      //   })
      // })

      Object.keys(locales).map(lang => {
        // const localizedPath = locales[lang].default ? '' : locales[lang].path

        // return createPage({
        //   path: localizedPath,
        //   context: {
        //     locale: lang,
        //     previous,
        //     next,
        //   },
        // })
        return createPage({
          path: post.node.frontmatter.path,
          component: blogPostTemplate,
          context: { previous, next, locale: 'en' },
        })
      })

      // createPage({
      //   path: post.node.frontmatter.path,
      //   component: blogPostTemplate,
      //   context: { previous, next, locale: lang },
      // })
    })
  })
}

// // to hopefully fix ie11 compat
// exports.onCreateWebpackConfig = ({
//   stage,
//   plugins,
//   actions
// }) => {
//   switch (stage) {
//     case 'build-javascript':
//       actions.setWebpackConfig({
//         optimization: {
//           minimizer: [
//             plugins.minifyJs({
//               terserOptions: {
//                 ecma: 5 // Ensures minified js is IE11 compatible
//               }
//             }),
//             plugins.minifyCss()
//           ]
//         }
//       })
//   }
// }

// exports.onCreateWebpackConfig = ({
//   stage,
//   getConfig,
//   actions: { replaceWebpackConfig }
// }) => {
//   switch (stage) {
//     case 'build-javascript':
//       // We want to include the babel polyfills before any application code,
//       // so we're inserting it as an additional entry point.  Gatsby does not allow
//       // this in "setWebpackConfig", so we have to use "replaceWebpackConfig"
//       const config = getConfig();

//       const app =
//         typeof config.entry.app === 'string'
//           ? [config.entry.app]
//           : config.entry.app;

//       config.entry.app = ['@babel/polyfill', ...app];
//       replaceWebpackConfig(config);
//   }
// };
