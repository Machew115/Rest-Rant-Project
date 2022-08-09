const React = require('react')

function Def (html) {
   return(
   <html>
        <head>
            <title>Title</title>
            <link rel="stylesheets" href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js'/>
            <link rel='stylesheets' href="/css/style.css"/>
        </head>
        <body>
            {html.children}
        </body>
    </html>
   )
}

module.exports = Def