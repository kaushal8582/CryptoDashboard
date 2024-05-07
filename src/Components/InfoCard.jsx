import React from 'react'
import { CustomCard } from '../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({imgUrl,text ,tagText ,inverted}) => {
  return (
    <CustomCard  bgColor={inverted?"blue":"white"} bgImage={imgUrl } bgSize={"cover"} bgRepeat={"no-repeat"} >
      <Tag color={inverted?"blue":"white"} fontWeight={"bold"}
       bg={ inverted?"white": "blue"} borderRadius={"full"}>{tagText}</Tag>
      <Text mt={"4"} fontWeight={"medium"} textStyle={"h5"} color={inverted?"white":"black.80"} >{text}</Text>

    </CustomCard>
  )
}

export default InfoCard