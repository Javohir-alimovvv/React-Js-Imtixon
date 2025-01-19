import React, { memo, useState } from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Top from '../../components/top/Top'
import Sidebar from '../../components/sidebar/Sidebar'
import Search from '../../components/search/Search'

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false)

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Top />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} search={search} setSearch={setSearch} />
      <Search search={search} setSearch={setSearch} />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default memo(Layout)