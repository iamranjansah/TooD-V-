import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'id',
      title: 'Title',
      description: 'description',
      video: {
        url: 'https://videos.pexels.com/video-files/8493387/8493387-uhd_2732_1440_24fps.mp4',
      },
    },
    {
      _id: 'id2',
      title: 'Title2',
      description: 'description2',
      video: {
        url: 'https://videos.pexels.com/video-files/20597829/20597829-hd_1920_1080_60fps.mp4',
      },
    },

    {
      _id: 'id2',
      title: 'Title2',
      description: 'description3',
      video: {
        url: 'https://videos.pexels.com/video-files/13081733/13081733-hd_1920_1080_30fps.mp4',
      },
    },
  ];

  return (
    <Grid padding={'10'} my={'10'} minH={'90vh'} templateColumns={['1fr', '3fr 1fr']} >
      <Box>
        <div
          style={{
            border: '3px solid black',
            padding: '2px',
            borderRadius: '5px',
          }}
        >
          <video
            autoPlay
            controls
            src={lectures[lectureNumber].video.url}
            controlsList="nodownload remoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            muted
          ></video>

          <Heading
            m={'4'}
            children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
          />
          <hr  />
          <Heading m={'4'} children="Description" size={'md'} />
          <Text m={'4'} children={lectures[lectureNumber].description} />
        </div>
      </Box>

      <VStack>
    
        {lectures.map((item, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={item._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              
              margin: '0',
              borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
   
      </VStack>
    </Grid>
  );
};

export default CoursePage;
