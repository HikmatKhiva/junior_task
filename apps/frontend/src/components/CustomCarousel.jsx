"use client"
import { Button, MobileStepper } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from "../app/index.module.scss"
const CustomCarousel = ({ images, title }) => {
    const [activeStep, setActiveStep] = useState(0)
    const maxSteps = images.length
    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    return (
        <div className={styles.carousel}>
            <Image src={images[activeStep].thumbnail} width={400} height={250} priority alt={title} />
            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button onClick={handleNext} size="small" disabled={activeStep === (maxSteps - 1)}>Next</Button>
                }
                backButton={
                    <Button onClick={handleBack} size="small" disabled={activeStep === 0}>Back</Button>
                }
            />
        </div>
    )
}

export default CustomCarousel