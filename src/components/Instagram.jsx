import React,{ useState, useCallback } from "react";
import "../App.css";
import { Page,Button,PageActions, Select,Stack,Heading,Form,FormLayout } from "@shopify/polaris";
import { saveAs } from 'file-saver'
const Instagram = () => {

    function downloadImage(url, filepath) {
        return download.image({
        url,
        dest: filepath 
        });
    }

    const [value, setValue] = useState({
        id:"",
        token:"",
        username:"",
        numOfPhotos:"",
    });
    // const handleChange = e => setValue(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    }

    const [selected, setSelected] = useState('Yes');

    const handleSelectChange = useCallback((value) => setSelected(value), []);
    const saveData = () => {

        console.log(this.state)
    }
    const options = [
        {label: 'Yes', value: '1'},
        {label: 'No', value: '0'},
      ];
    const handleSubmit = useCallback(() => {
        var userid = value.id;
        var limit = value.numOfPhotos;
        var accesstoken = value.token;
        var verify_url = 'https://graph.instagram.com/'+userid+'/media?fields=media_url,thumbnail_url,caption,media_type,username,permalink&limit='+limit+'&access_token='+accesstoken;
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        fetch(verify_url, requestOptions)
            .then(response => response.json())
            .then(result => 
                {
                    var res = [];
                    res.push(...result.data);
                    res.forEach(element => {
                        console.log(Object.values(element)[0])
                    });
                })
            .catch(error => console.log('error', error));
    });
    return (
        <div className="bst_instagram">
            <Page
                fullWidth
                title="Instagram"
                primaryAction={
                    {
                        content: 'Save',
                        onClick: () => {console.log(value)}
                    }
                }
                >
                    <Form onSubmit={handleSubmit}>
                        <FormLayout>
                            <Stack alignment="center">
                                <Stack.Item>
                                    <Heading>Enable</Heading>
                                </Stack.Item>
                                <Stack.Item>
                                    <Select
                                        options={options}
                                        onChange={handleSelectChange}
                                        value={selected}
                                        labelInline="eqw"
                                    />
                                </Stack.Item>
                            </Stack>
                            <Stack alignment="center">
                                <Stack.Item>
                                    <Heading>User Id</Heading>
                                </Stack.Item>
                                <Stack.Item>
                                    <input
                                        value={value.id}
                                        onChange={handleChange}
                                        name="id"
                                    />
                                </Stack.Item>
                            </Stack>
                            <Stack alignment="center">
                                <Stack.Item>
                                    <Heading>Access Token</Heading>
                                </Stack.Item>
                                <Stack.Item>
                                    <input
                                        value={value.token}
                                        onChange={handleChange}
                                        name="token"
                                    />
                                </Stack.Item>
                            </Stack>
                            <Stack alignment="center">
                                <Stack.Item>
                                    <Heading>Username</Heading>
                                </Stack.Item>
                                <Stack.Item>
                                    <input
                                            value={value.username}
                                            onChange={handleChange}
                                            name="username"
                                        />
                                </Stack.Item>
                            </Stack>
                            <Stack alignment="center">
                                <Stack.Item>
                                    <Heading>Number of Photos</Heading>
                                </Stack.Item>
                                <Stack.Item >
                                    <input
                                            value={value.numOfPhotos}
                                            onChange={handleChange}
                                            name="numOfPhotos"
                                        />
                                </Stack.Item>
                            </Stack>
                            <Stack alignment="center">
                                <Stack.Item>
                                    <Heading>Fetch Posts</Heading>
                                </Stack.Item>
                                <Stack.Item >
                                    <Button submit size="large">Fetch</Button>
                                </Stack.Item>
                            </Stack>
                        </FormLayout>
                    </Form>
            </Page>
            
        </div>
    );
  }
  export default Instagram;