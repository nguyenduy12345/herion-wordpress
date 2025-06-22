import { motion } from "motion/react"

import { slideUp } from "../../framer-motion/motionPreset"
const TemplatePage = ({template}) => {
  return (
    <motion.div 
      variants={slideUp}
      initial = 'initial'
      whileInView = 'animate'
      viewport={{once: true}}
      transition={{duration: 0.5, type: "easeIn"}}
      className='w-full h-auto' key={template.id}>
      <div className={`cursor-pointer ${template.name ? 'hover:-translate-y-[1rem]' : ''} duration-300 ease-linear transition-all`}>
        <img className={`w-full h-auto  ${template.name ? 'shadow-2xl' : ''} `} src={template.img} alt={template.type} loading="lazy"/>
      </div>
      <p className='mt-[2rem] text-center text-[1.3rem]'>{template.name}</p>
    </motion.div>
  )
}

export default TemplatePage
