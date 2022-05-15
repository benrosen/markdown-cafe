// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'
import PagesLayout from 'src/layouts/PagesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={PagesLayout}>
          <Route path="/{id:String}/edit" page={PageEditPagePage} name="editPage" />
          <Route path="/{id:String}" page={PagePagePage} name="page" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
