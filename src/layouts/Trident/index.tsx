import React, { FC } from 'react'
import Main from '../../components/Main'
import Popups from '../../components/Popups'
import Header from '../../components/Header'
import Breadcrumb, { BreadcrumbItem } from '../../features/trident/Breadcrumb'
import Container from '../../components/Container'
import Background from '../../features/trident/Background'

interface ComponentProps {
  breadcrumbs: BreadcrumbItem[]
  background?: string
}

const TridentLayout: FC<ComponentProps> = ({ children = [], background = 'bg-dots-pattern', breadcrumbs }) => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen">
        <div className="bg-dark-1000 w-full">
          <Header />
          <Breadcrumb breadcrumbs={breadcrumbs} />
        </div>
        <Main>
          <Container maxWidth="7xl" className="flex flex-col gap-5 p-5 z-[1]">
            <Background>{children}</Background>
          </Container>
        </Main>
        <Popups />
      </div>
    </>
  )
}

export default TridentLayout