import React from 'react'
import Center from './components/Center'
import Sidebar from './components/Sidebar'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <SideBar />
        <Center />
      </RecoilRoot>
    </div>
  )
}

export default App
