import { Stack } from "@fluentui/react";
import cameraimage1 from '../assets/cameraimage1.png'; 
import cameraimage2 from '../assets/cameraimage2.png'; 
import {
    makeStyles,
    Body1,
    Caption1,
    Button,
    Divider,
  } from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";  
import {
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
    Text,
  } from "@fluentui/react-components";
  
  const useStyles = makeStyles({
    cardContainer: {
      margin: "auto",
      width: "572px",
      maxWidth: "100%",
    },
    card: {
        margin: "auto",
        width: "268px",
        maxWidth: "100%",
        paddingLeft: "40px"
      },
    text: {
        paddingTop: "30px",
    }
    ,
    textRightAlign: {
        textAlign: "right",
    }
  });
  const Cameras = () => {
    const styles = useStyles();
    return (

        <Stack horizontalAlign="start" grow={1}>
            <Stack.Item align="start" grow={3}>
                <Stack  horizontalAlign="start">
                <Card className={styles.cardContainer} orientation="vertical">
                    <CardHeader
                        image={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M8 12C8 10.8954 8.89542 10 10 10C11.1046 10 12 10.8954 12 12C12 13.1046 11.1046 14 10 14C8.89542 14 8 13.1046 8 12ZM10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8ZM7 12C7 10.3431 8.34314 9 10 9C11.6569 9 13 10.3431 13 12C13 13.6569 11.6569 15 10 15C8.34314 15 7 13.6569 7 12ZM2 4.5C2 3.67157 2.67157 3 3.5 3H16.5C17.3284 3 18 3.67157 18 4.5V5.5C18 6.15311 17.5826 6.70874 17 6.91464V11C17 14.866 13.866 18 10 18C6.134 18 3 14.866 3 11V6.91464C2.41739 6.70874 2 6.15311 2 5.5V4.5ZM4 7V11C4 14.3137 6.68628 17 10 17C13.3137 17 16 14.3137 16 11V7H4ZM3.5 4C3.22386 4 3 4.22386 3 4.5V5.5C3 5.77614 3.22386 6 3.5 6H16.5C16.7761 6 17 5.77614 17 5.5V4.5C17 4.22386 16.7761 4 16.5 4H3.5Z" fill="#242424"/>
                            </svg>
                        }
                        header={
                        <Body1>
                            Cameras
                        </Body1>
                        }
                        description={<Caption1></Caption1>}
                    />
                    <CardFooter>
                    <Text>Filter name: Filter value</Text>
                    <Text className={styles.textRightAlign}>9 cameras active</Text>                        
                    </CardFooter>
                </Card>
                </Stack> 
            </Stack.Item>
            <Stack.Item>
                <Stack horizontal>

                <Card className={styles.card}>
                    <CardPreview>
                        <img src={cameraimage1} alt="" />
                    </CardPreview>
                    <CardFooter>
                        <Stack>
                        <Text><b>Camera title</b></Text>
                        <Text>Zone label</Text>
                        <Text className={styles.text}>Status: Active</Text>
                        <Text>People count: 10</Text>
                        </Stack>
                    </CardFooter>
                </Card>
                <Card className={styles.card}>
                    <CardPreview>
                        <img src={cameraimage2} alt="" />
                    </CardPreview>
                    <CardFooter>
                        <Stack>
                        <Text><b>Camera title</b></Text>
                        <Text>Zone label</Text>
                        <Text className={styles.text}>Status: Active</Text>
                        <Text>People count: 10</Text>
                        </Stack>
                    </CardFooter>
                </Card>

                </Stack>
                <Stack horizontal>

                <Card className={styles.card}>
                    <CardPreview>
                        <img src={cameraimage1} alt="" />
                    </CardPreview>
                    <CardFooter>
                        <Stack>
                        <Text><b>Camera title</b></Text>
                        <Text>Zone label</Text>
                        <Text className={styles.text}>Status: Active</Text>
                        <Text>People count: 10</Text>
                        </Stack>
                    </CardFooter>
                </Card>
                <Card className={styles.card}>
                    <CardPreview>
                        <img src={cameraimage2} alt="" />
                    </CardPreview>
                    <CardFooter>
                        <Stack>
                        <Text><b>Camera title</b></Text>
                        <Text>Zone label</Text>
                        <Text className={styles.text}>Status: Active</Text>
                        <Text>People count: 10</Text>
                        </Stack>
                    </CardFooter>
                </Card>

                </Stack>
            </Stack.Item>
        </Stack>
    );
  };
  
  export default Cameras;