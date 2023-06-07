import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    marginVertical: "",
  },
  view: {
    border: "1px solid gray",
    borderRadius: "6px",
    padding: "5px",
    margin: "5px",
    flexDirection: "row",
  },
  simpleFeild: {
    marginVertical: "1px",
    flexBasis: "50%",
  },
  section: {
    flexGrow: 1,
  },
  text: {
    marginVertical: "20px",
  },
  head: {
    margin: "5px",
    borderRadius: "6px",
    padding: "10px ",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "500",
    backgroundColor: "#2F77F1",
    color: "white",
  },
});

const getPage = (page) => {
  const ar = [];
  page.map((item) => {
    if (typeof item === "string") {
      ar.push(
        <Text style={styles.head} key={Math.random()}>
          {item}
        </Text>
      );
    } else {
      ar.push(
        <View style={styles.view} key={Math.random()}>
          <Text style={styles.simpleFeild}>{item[0]}</Text>
          <Text style={styles.simpleFeild}>{item[1]}</Text>
        </View>
      );
    }
  });
  return ar;
};
const getData = (data) => {
  const ar = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      ar.push(
        <Page size="A4" style={styles.page} key={Math.random()}>
          {getPage(data[i])}
        </Page>
      );
    }
  }
  return ar;
};
const ReportPdf = (props) => {
  const { allExpensedata } = useSelector((state) => state.formdata);
  const data = Object.entries(allExpensedata);
  const nestData = data.map((item) => {
    if (typeof item[1] === "object") {
      return [item[0], ...Object.entries(item[1])];
    }
  });

  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.head}>Project Report</Text>
        <View style={styles.section}>
          {data.map((item) => {
            if (typeof item[1] === "string" && item[0] !== "access")
              return (
                <View style={styles.view} key={Math.random()}>
                  <Text style={styles.simpleFeild}>{item[0]}</Text>
                  <Text style={styles.simpleFeild}>{item[1]}</Text>
                </View>
              );
          })}
        </View>
      </Page>

      {getData(nestData)}
    </Document>
  );
  return (
    <Card>
      <PDFViewer width="100%" height="900px" showToolbar={false}>
        {MyDocument}
      </PDFViewer>
      <PDFDownloadLink
        document={MyDocument}
        fileName={allExpensedata["Name of firm"] + "_Onesetu.pdf"}
        className="px-6 py-3 bg-Blue-500 text-white font-semibold lg:font-bold rounded-lg mx-auto my-12 block w-max text-base lg:text-2xl border border-Blue-500 hover:bg-white hover:text-Blue-500 hover:shadow-lg duration-500"
        onClick={props.onClick}
      >
        Download
      </PDFDownloadLink>
    </Card>
  );
};

export default ReportPdf;
