import React, { useEffect, useState } from "react";
import { CCol, CRow, CCard, CCardBody, CCardHeader } from "@coreui/react";
import { Status } from "src/configs";
import {
  Table,
  Space,
  Tag,
  Button,
  Modal,
  Form,
  Input,
  Select,
  notification,
  Upload,
  Avatar,
} from "antd";
import { useSelector } from "react-redux";
import { uploadImage } from "src/services/image";
import { getProductDetail, updateProduct } from "src/services/product";
import { getAppreciateDetail, updateAppreciate } from "src/services/appreciate";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { storage } from "src/firebase";
import { withNamespaces } from "react-i18next";
import { useHistory } from "react-router";
import BaseHelper from "src/services/helper";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const AppreciationProductDetail = ({ match, t }) => {
  const categories = useSelector((state) => state.categories);
  const [form] = Form.useForm();
  const history = useHistory();
  const [data, setData] = useState();
  const [avatarURL, setAvatarURL] = useState();
  const [statusName, setStatusName] = useState("Active");
  const [statusColor, setStatusColor] = useState("green");

  useEffect(() => {
    getAppreciateDetail(match.params.id, (res) => {
      if (res.status === 200) {
        setData(res.data);
        setAvatarURL(res.data.image);
        setStatusName(
          Status.products.filter((item) => item.id == res.data.status)[0].name
        );
        setStatusColor(
          Status.products.filter((item) => item.id == res.data.status)[0].color
        );
        form.setFieldsValue({
          name: res.data.name,
          point: res.data.point,
          image: res.data.image,
          status: res.data.status,
          mass: res.data.mass,
          stock: res.data.stock,
          height: res.data.height,
          width: res.data.width,
          description: res.data.description,
          category: res.data.category._id || "",
        });
      } else {
        notification.error({
          message: t(`Notification`),
          description: `Get Appreciation Product failed.`,
          placement: `bottomRight`,
          duration: 1.5,
        });
      }
    });
  }, []);
  const onFinish = (values) => {
    const product_id = match.params.id;
    Modal.confirm({
      title: t(`Update Appreciation Product`),
      icon: <ExclamationCircleOutlined />,
      content: t(
        `You are going to update this appreciation product? Are you sure you want to do this? You can't reverse this`
      ),
      onOk() {
        values.image = avatarURL || "";
        console.log(values);
        values.point = values.point.toString();
        updateAppreciate(product_id, BaseHelper.formatData(values), (res) => {
          if (res.status === 200) {
            notification.success({
              message: t(`Notification`),
              description: `Update appreciation product successful.`,
              placement: `bottomRight`,
              duration: 1.5,
            });
            // setIsFinalUpdate(true)
            history.push("/appreciation-products");
          } else {
            notification.error({
              message: t(`Notification`),
              description: `Update appreciation product failed.`,
              placement: `bottomRight`,
              duration: 1.5,
            });
          }
        });
      },
      onCancel() {
        notification.info({
          message: t(`Notification`),
          description: t(`Stop update appreciation product`),
          placement: `bottomRight`,
          duration: 1.5,
        });
      },
      centered: true,
    });
  };
  const handleUploadAvatar = (e) => {
    uploadImage(e.file.name, e.file, setAvatarURL);
  };
  return (
    <CRow>
      <CCol xs="12" md="9" className="mb-4">
        <CCard>
          <CCardHeader
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            {t("Product Detail")}
            <Upload
              showUploadList={false}
              customRequest={handleUploadAvatar}
              // beforeUpload={beforeUpload}
            >
              {avatarURL ? (
                <Avatar
                  src={`${avatarURL}`}
                  alt="product-img"
                  shape="square"
                  size={{
                    xs: 100,
                    sm: 100,
                    md: 100,
                    lg: 100,
                    xl: 100,
                    xxl: 100,
                  }}
                />
              ) : (
                <Avatar
                  src={window.location.origin + "/avatars/default-avatar.png"}
                  alt=""
                  size={{
                    xs: 100,
                    sm: 100,
                    md: 100,
                    lg: 100,
                    xl: 100,
                    xxl: 100,
                  }}
                />
              )}
            </Upload>
          </CCardHeader>
          <CCardBody>
            <Form form={form} {...formItemLayout} onFinish={onFinish}>
              <Form.Item
                label={t("Name")}
                labelAlign="left"
                name="name"
                rules={[
                  {
                    required: true,
                    message: t("Please input appreciation product name!"),
                  },
                ]}
              >
                <Input
                  placeholder={t("Please input appreciation product name")}
                />
              </Form.Item>
              <Form.Item
                label={t("Description")}
                labelAlign="left"
                name="description"
                rules={[
                  {
                    required: true,
                    message: t(
                      "Please input appreciation product description!"
                    ),
                  },
                ]}
              >
                <Input placeholder={t("Please input description")} />
              </Form.Item>
              <Form.Item
                label={t("Price")}
                labelAlign="left"
                name="point"
                rules={[
                  {
                    required: true,
                    message: t("Please input appreciation product point!"),
                  },
                ]}
              >
                <Input type="number" placeholder={t("Please input point")} />
              </Form.Item>
              <Form.Item
                label={t("Category")}
                labelAlign="left"
                initialValue={
                  Object.keys(categories).length > 0 ? categories[0]._id : ""
                }
                name="category"
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Select category"
                  optionFilterProp="category"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {categories.map((item, idx) => (
                    <Select.Option value={item?._id} key={idx}>
                      {item?.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label={t("Mass")}
                labelAlign="left"
                name="mass"
                rules={[
                  {
                    required: true,
                    message: t("Please input appreciation product mass!"),
                  },
                ]}
              >
                <Input type="number" placeholder={t("Please input mass")} />
              </Form.Item>
              <Form.Item
                label={t("Width")}
                labelAlign="left"
                name="width"
                rules={[
                  {
                    required: true,
                    message: t("Please input appreciation product width!"),
                  },
                ]}
              >
                <Input type="number" placeholder={t("Please input width")} />
              </Form.Item>

              <Form.Item
                label={t("Height")}
                labelAlign="left"
                name="height"
                rules={[
                  {
                    required: true,
                    message: t("Please input product height!"),
                  },
                ]}
              >
                <Input type="number" placeholder={t("Please input height")} />
              </Form.Item>
              <Form.Item
                label={t("Stock")}
                labelAlign="left"
                name="stock"
                rules={[
                  {
                    required: true,
                    message: t("Please input product stock!"),
                  },
                ]}
              >
                <Input type="number" placeholder={t("Please input stock")} />
              </Form.Item>
              <Form.Item
                label={t("Status")}
                labelAlign="left"
                name="status"
                rules={[
                  {
                    required: true,
                    message: t("Please input appreciation product status!"),
                  },
                ]}
              >
                <Tag color={statusColor}>{statusName}</Tag>
              </Form.Item>
              <Button type="primary" block htmlType="submit">
                {t("Update")}
              </Button>
            </Form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default withNamespaces()(AppreciationProductDetail);
