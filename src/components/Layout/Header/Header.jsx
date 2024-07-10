import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = false;
  const user = {
    role: "admin",
  }

  const logoutHandler = () =>{

    console.log("Logout");
    onClose();
  }

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        {/* <DrawerOverlay backdropFilter={"blur(20px)"}/> */}

        <DrawerContent>
          <DrawerHeader textAlign={'center'} borderBottomWidth={'1px'}>
          Ranjan's Study Sphere
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <Link onClick={onClose} to="/">
                <Button variant={'ghost'}>Home</Button>
              </Link>

              <Link onClick={onClose} to="/courses">
                <Button variant={'ghost'}>Browse all Courses</Button>
              </Link>

              <Link onClick={onClose} to="/request">
                <Button variant={'ghost'}>Request a Course</Button>
              </Link>

              <Link onClick={onClose} to="/contact">
                <Button variant={'ghost'}>Contact Us</Button>
              </Link>

              <Link onClick={onClose} to="/about">
                <Button variant={'ghost'}>About</Button>
              </Link>
{/* 
              <Link onClick={onClose} to="/policy">
                <Button variant={'ghost'}>Privacy Policy</Button>
              </Link> */}

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>

                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {
                user && user.role === 'admin' &&(

                    <Link onClick={onClose}
                    to = '/admin/dashboard'>

                        <Button colorScheme={'purple'} variant={"ghost"}>

                            <RiDashboardFill style={{margin:"4px"}}/>
                        Dashboard
                        </Button>
                    </Link>
                )
              }
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>

                    <p>or</p>

                    <Link onClick={onClose} to="/signup">
                      <Button colorScheme="yellow">SignUp</Button>
                    </Link>
                  </>
                )}


              </HStack>

             
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
