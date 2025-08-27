import { Button, ConfigProvider, Form } from "antd"
import Input from "antd/es/input/Input"

const Login = () => {
    return (
        <ConfigProvider>
            <div style={{
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center',
                minHeight: '80vh',
                width: '100vw',
            }}>
                <Form
                    name="vertical"
                    layout="vertical"
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 16 }}
                    style={{
                        width: '30vw', 
                        height: '30vh',
                        padding: '20px',
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        backgroundColor: '#f0f2f5',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)' // Added a subtle shadow
                    }}
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </ConfigProvider>
    )
}


export default Login