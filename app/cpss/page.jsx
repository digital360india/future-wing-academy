import CognitiveTest from '@/components/cpsspage/CognitiveTest'
import CPSSInfo from '@/components/cpsspage/CPSSInfo'
import JoinForm from '@/components/cpsspage/JoinForm'
import PsychomotorTest from '@/components/cpsspage/PsychomotorTest'
import React from 'react'

const page = () => {
  return (
    <div>
        {/* <JoinForm /> */}
        <CPSSInfo />
        <CognitiveTest/>
        <PsychomotorTest />
    </div>
  )
}

export default page