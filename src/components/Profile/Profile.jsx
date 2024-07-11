import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {RiDeleteBin7Fill} from 'react-icons/ri'
// import fileUploadCss from '../../components/Auth/Signup'

const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
  };
  

const ChangePhotoBox = ({isOpen, onClose, changeImageSubmitHandler})=>{
    const changeImage = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImagePrev(reader.result);
          setImage(file); 
        };
      };

      const [image, setImage] = useState("");
      const [imagePrev, setImagePrev] = useState("");

      const closeHandler =()=>{
        onClose();
        setImage("");
        setImagePrev("");
      }

    return(
       <Modal isOpen={isOpen} onClose={closeHandler}>
        <ModalOverlay backdropFilter={'blur(10px)'}>
            <ModalContent>
                <ModalHeader>
                    Change Photo
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Container>
                        <form onSubmit={(e)=>changeImageSubmitHandler(e,image)} > 
                            <VStack spacing={'8'}>

                                {
                                    imagePrev &&  <Avatar src={imagePrev} boxSize={'48'} />
                                }
                               
                                <Input 
                                accept="image/*"
                                type='file'
                                css={{'&::file-selector-button': fileUploadCss}}
                                onChange={changeImage}
                                />

                                <Button w={'full'} colorScheme='yellow' type='submit'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>

           <ModalFooter>
            <Button mr={'3'} onClick={closeHandler }>Cancel</Button>
           </ModalFooter>
            </ModalContent>

        </ModalOverlay>

       </Modal>
    )
}


const Profile = () => {
  const user = {
    name: 'Ranjan Kumar',
    email: 'iamranjansahh@gmail.com',
    since: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: undefined,
    },
    playlist: [
      {
        course: 'adfasdf',
        poster: 'https://www.iamranjansah.me/static/media/coming%20soon.9a89d4777370090a6212.png',
      },
    ],
  };

  const {isOpen, onClose, onOpen} = useDisclosure();

  const changeImageSubmitHandler = (e, image) =>{
e.preventDefault();
  };

  const removeFromPlaylistHandler =  (id)=>{
    console.log(id);
  };

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme="yellow" variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name: " fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>

          <HStack>
            <Text children="Email: " fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>

          <HStack>
            <Text children="Since: " fontWeight={'bold'} />
            <Text children={user.since.split('T')[0]} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button color={'yellow.400'} variant={'unstyled'}>
                  {' '}
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow" variant={'ghost'}>
                    Subscribe
                  </Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>

            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" size={'md'} my={'8'} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playlist.map((item, index) => (
            <VStack w={'40'} m={'2'} key={item.course}>
              <Image boxSize={'full'} objectFit={'contain'} src={item.poster} />
              <HStack>
                <Link to={`/course/${item.course}`}>
                  <Button colorScheme="yellow" variant={'ghost'}>
                    Watch Now
                  </Button>
                </Link>

                <Button onClick={()=>removeFromPlaylistHandler(item.course)} >
                    <RiDeleteBin7Fill/>
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>
    </Container>
  );
};

export default Profile;
