import React,{ useState, useCallback } from "react";
import "../App.css";
import { Page,Button,PageActions, Select,Stack,Heading,Form,FormLayout } from "@shopify/polaris";
import axios from 'axios';

const Instagram = () => {

    const [value, setValue] = useState({
        setting_id:2,   
        id:"",
        token:"",
        username:"",
        numOfPhotos:"",
    });
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    }

    const [selected, setSelected] = useState('Yes');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const options = [
        {label: 'Yes', value: '1'},
        {label: 'No', value: '0'},
      ];
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("https://5c35-222-252-24-157.ngrok.io/api/bst/instagram", value)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="bst_instagram">
            <Page
                fullWidth
                title="Instagram"
                primaryAction={
                    {
                        content: 'Save',
                        onClick: async (e) => {
                            e.preventDefault();

                            try {
                                await axios.post("https://5c35-222-252-24-157.ngrok.io/api/bst", value)
                            } catch (error) {
                                console.log(error)
                            }
                        }
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