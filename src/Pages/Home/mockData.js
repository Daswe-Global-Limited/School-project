import React from 'react'
import { FaGraduationCap, FaBrain, FaCloudsmith} from 'react-icons/fa'
import schoolImg from "../../Assets/Logo/schoolLogo.PNG";


export const HomeData = {
    homeBannerData: {
        title: "Let's be part of your story",
        video: "https://vod-progressive.akamaized.net/exp=1671370441~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F366%2F18%2F451833843%2F1987949505.mp4~hmac=54e95e9cc6cfdd770f59a850c7e23400af4e1c38b581f59f103e1242df968642/vimeo-prod-skyfire-std-us/01/366/18/451833843/1987949505.mp4?download=1&filename=production+ID%3A5199636.mp4",
        buttonText: "Enroll Now",
    },

    valueData: [
        {
            icon: <FaGraduationCap/>,
            smallText: "We deliver quality education in all our schools",
            bigText: "Quality Education",
        },

        {
            icon: <FaBrain/>,
            smallText: `We deliver quality education in all our schools`,
            bigText: `Intellectual Development`,
        },

        {
            icon: <FaCloudsmith/>,
            smallText: "We deliver quality education in all our schools",
            bigText: "Moral Ethics",
        },
    ],

   schoolData: {
    smallText: "OUR SCHOOLS",
    bigTitle: "A Quick View Of Our Schools",

    otherSchools: [
      {
        schoolImg: schoolImg,
        schoolName: "School A",
      },
      {
        schoolImg: schoolImg,
        schoolName: "School B",
      },
      {
        schoolImg: schoolImg,
        schoolName: "School C",
      },
      {
        schoolImg: schoolImg,
        schoolName: "School D",
      },
    ],
  },
}