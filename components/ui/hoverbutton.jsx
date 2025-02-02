"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function HButton({props}) {
    const [isActive, setIsActive] = useState(false)
  
    return (
      <Button
        variant="blue"
        className="relative overflow-hidden focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 focus:ring-offset-2"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      >
        <AnimatePresence initial={false} mode="wait">
          {!isActive ? (
            <motion.span
              key="default"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {props.txt1}
            </motion.span>
          ) : (
            <motion.span
              key="hovered"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {props.txt2}
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    )
  }
