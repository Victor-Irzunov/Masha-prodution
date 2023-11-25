"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import './BtnMenuNavigate.css'
import { MenuOutlined } from '@ant-design/icons'
import { Link as LinkScroll } from 'react-scroll'

export const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const BtnMenuNavigate = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className='menu'
    >
      <motion.button
        className="btn-menu"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuOutlined />
        навигация по странице
      </motion.button>


      <motion.ul
        className="btn-menu-ul"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>
          <LinkScroll to='besplodie'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            бесплодие
          </LinkScroll>
        </motion.li>

        <motion.li variants={itemVariants}>
          <LinkScroll to='semeiya'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            семейные проблемы
          </LinkScroll>
        </motion.li>

        <motion.li variants={itemVariants}>
          <LinkScroll to='podrostok'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            проблемы у подростка
          </LinkScroll>
        </motion.li>
        <motion.li variants={itemVariants}>
          <LinkScroll to='zhenskij'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            женский психолог
          </LinkScroll>
        </motion.li>
        <motion.li variants={itemVariants}>
          <LinkScroll to='klinicheskij'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            клинический психолог
          </LinkScroll>
        </motion.li>
        <motion.li variants={itemVariants}>
          <LinkScroll to='depressiya'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            лечение депрессии
          </LinkScroll>
        </motion.li>

        <motion.li variants={itemVariants}>
          <LinkScroll to='voprosy'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            частые вопросы
          </LinkScroll>
        </motion.li>

        <motion.li variants={itemVariants}>
          <LinkScroll to='masha'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            психолог Мария
          </LinkScroll>
        </motion.li>

        <motion.li variants={itemVariants}>
          <LinkScroll to='tnt'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            гость на ТНТ
          </LinkScroll>
        </motion.li>

        <motion.li variants={itemVariants}>
          <LinkScroll to='form'
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            написать Марии
          </LinkScroll>
        </motion.li>


      </motion.ul>
    </motion.nav>
  );
}
export default BtnMenuNavigate;