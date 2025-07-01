import Head from "next/head";
import React, { useState } from "react";
import QueLayout from "../../components/QueLayout";

const GlossaryTable = () => {
  const termsData = [
    {
        que: "Can you explain the difference between Power BI Desktop and Power BI Service?",
        ans: "Power BI Desktop is a client application used for creating reports and data visualizations, while Power BI Service is an online SaaS (Software as a Service) platform used for sharing, collaborating, and distributing the reports and dashboards created in Power BI Desktop.",
      },
      {
        que: "What are the key differences between DirectQuery and Import mode in Power BI?",
        ans: "In Import mode, data is imported into Power BI and stored within the Power BI file, allowing for high performance but requiring periodic data refreshes. DirectQuery, on the other hand, queries the underlying data source in real-time, which keeps the data current but can result in slower performance due to the constant querying.",
      },
      {
        que: "How would you use the CALCULATE function in DAX and why is it important?",
        ans: "The CALCULATE function in DAX is used to modify the filter context of an expression, allowing for dynamic calculation adjustments based on specific conditions. It's important because it enables advanced data analysis, such as creating complex measures that adapt to different filters and slicers in reports.",
      },
      {
        que: "Describe the role of Gateways in Power BI and their importance.",
        ans: "Gateways act as a bridge between on-premises data sources and the Power BI Service, allowing secure data transfer for scheduled refreshes or DirectQuery operations. They are crucial for ensuring that data from local sources can be accessed and updated in real-time within Power BI reports and dashboards.",
      },
      {
        que: "What is Row-Level Security (RLS) in Power BI, and how do you implement it?",
        ans: "Row-Level Security (RLS) in Power BI restricts data access for users based on their roles. It is implemented by creating security roles in Power BI Desktop with DAX filters that define which data each role can access, and then assigning users to these roles in the Power BI Service.",
      },
      {
        que: "How would you handle data transformation tasks in Power BI?",
        ans: "Data transformation tasks in Power BI are handled using Power Query Editor, where you can apply various transformations such as filtering rows, renaming columns, merging tables, and creating custom columns using M code. This ensures that the data is clean and structured appropriately for analysis.",
      },
      {
        que: "What are the best practices for creating effective visualizations in Power BI?",
        ans: "Best practices for creating effective visualizations in Power BI include choosing the right chart type for the data, ensuring clarity and simplicity, using consistent colors and formatting, and leveraging tooltips and drill-through features to provide additional context without cluttering the visuals.",
      },
      {
        que: "How can you optimize the performance of a Power BI report?",
        ans: "To optimize the performance of a Power BI report, you can reduce the amount of data being imported, use aggregations and summarized data where possible, optimize DAX calculations, minimize the use of complex visuals, and ensure efficient data model design by removing unnecessary columns and relationships.",
      },
      {
        que: "How does Power BI integrate with Excel, and what are the benefits of this integration?",
        ans: "Power BI integrates with Excel through features like the Power BI Publisher for Excel, which allows users to pin Excel ranges, tables, and charts to Power BI dashboards, and the ability to export Power BI datasets to Excel for further analysis. This integration leverages Excel's familiarity and advanced analytics capabilities alongside Power BI's visualization and sharing features.",
      },
      {
        que: "What are the capabilities and benefits of using Power BI on mobile devices?",
        ans: "Power BI Mobile apps allow users to access and interact with their reports and dashboards on-the-go, providing real-time insights and data exploration capabilities. The mobile app supports touch interactions, notifications for data alerts, and offline access, making it a powerful tool for remote work and quick decision-making.",
      },
      
      {
        que: "How can you implement drill-through functionality in Power BI?",
        ans: "Drill-through functionality in Power BI allows users to navigate from a summary report to a detailed report by right-clicking on a data point and selecting the drill-through option. This is achieved by creating a drill-through page and defining the fields that will pass the filter context to the detailed page.",
      },
      {
        que: "What is the significance of the Power BI Service’s workspace, and how is it used?",
        ans: "Workspaces in the Power BI Service are collaborative environments where teams can create, share, and manage reports, dashboards, and datasets. They help organize content, control access, and facilitate teamwork on data projects.",
      },
      {
        que: "Explain how you can use bookmarks in Power BI.",
        ans: "Bookmarks in Power BI capture the current state of a report page, including filters, slicers, and visuals. They are used to create custom navigation, storytelling, and presentations within reports by allowing users to save and switch between different views and states of the report.",
      },
      {
        que: "What are dataflows in Power BI, and why are they useful?",
        ans: "Dataflows in Power BI are a way to create reusable data transformation logic that can be shared across multiple reports and datasets. They are useful for centralizing and standardizing data preparation processes, ensuring consistency and reducing redundancy in data management.",
      },
      {
        que: "Can you describe how to use the Q&A feature in Power BI?",
        ans: "The Q&A feature in Power BI allows users to ask natural language questions about their data, and Power BI generates visualizations based on the queries. It leverages AI to interpret the questions and provide relevant answers, making data exploration intuitive and accessible.",
      },
      {
        que: "What is the purpose of the KPI visual in Power BI, and how do you configure it?",
        ans: "The KPI (Key Performance Indicator) visual in Power BI is used to visualize progress toward a measurable goal. It displays current value, target value, and status (e.g., good, bad, on track). Configuring it involves setting the base measure, target measure, and defining threshold values for status indicators.",
      },
      {
        que: "How do you handle missing data in Power BI?",
        ans: "Missing data in Power BI can be handled using various techniques in Power Query Editor, such as removing rows with missing values, replacing nulls with default values, or using statistical methods to impute missing data. Choosing the appropriate method depends on the data context and analysis requirements.",
      },
      {
        que: "What are composite models in Power BI, and when would you use them?",
        ans: "Composite models in Power BI allow combining DirectQuery and Import data sources within a single dataset. They provide flexibility in data modeling and are used when some data needs to be kept in real-time (DirectQuery) while other data can be pre-aggregated and imported for performance optimization.",
      },
      {
        que: "Explain how the Quick Insights feature works in Power BI.",
        ans: "Quick Insights in Power BI uses machine learning algorithms to analyze datasets and automatically generate insights. It provides a variety of visualizations that highlight patterns, trends, and anomalies in the data, helping users quickly uncover valuable information without extensive manual analysis.",
      },
      {
        que: "How can you use the ‘What-if’ parameter in Power BI?",
        ans: "The ‘What-if’ parameter in Power BI allows users to create interactive scenarios by adding dynamic input fields that affect calculations and visualizations. It is configured by defining a parameter with possible values and incorporating it into DAX expressions, enabling users to explore different outcomes based on variable inputs.",
      },
      {
        que: "What is the role of the DAX ALL function, and how is it used?",
        ans: "The DAX ALL function is used to remove filters from a table or column, returning all rows regardless of the current filter context. It is often used in combination with other DAX functions to create measures that require ignoring specific filters, such as calculating total sales without considering product category filters.",
      },
      {
        que: "How do you manage incremental data refresh in Power BI?",
        ans: "Incremental data refresh in Power BI allows for updating only the new or changed data rather than refreshing the entire dataset. It is managed by defining data partitions and configuring the refresh policy in Power BI Desktop, specifying the time range and refresh frequency to optimize performance and reduce load on data sources.",
      },
      {
        que: "What are the benefits of using themes in Power BI, and how do you apply them?",
        ans: "Themes in Power BI allow for consistent styling and branding across reports by defining a set of colors, fonts, and other visual properties. They can be applied by importing a JSON file with the theme configuration, ensuring a unified look and feel that aligns with organizational standards or project requirements.",
      },
      {
        que: "How do you create and use calculated columns in Power BI?",
        ans: "Calculated columns in Power BI are created using DAX expressions to add new columns based on existing data. They are used to derive additional information that can be used in visualizations and calculations, such as creating a full name column by concatenating first and last name fields or categorizing data into custom groups.",
      },
      {
        que: "Can you explain the role of the R and Python integration in Power BI?",
        ans: "Power BI integrates with R and Python, allowing users to incorporate advanced analytics and custom visualizations created with these programming languages. This integration enables leveraging extensive libraries for statistical analysis, machine learning, and data visualization, enhancing the analytical capabilities of Power BI reports."
      },
      {
        que: "What is the purpose of a Power BI gateway and how does it work?",
        ans: "A Power BI gateway acts as a bridge between Power BI services and on-premises data sources, enabling secure data transfer. It works by establishing a connection to on-premises data sources and managing data refreshes and queries between the Power BI service and the data source.",
      },
      {
        que: "Explain the difference between calculated columns and measures in Power BI.",
        ans: "Calculated columns are computed during data loading and are stored in the data model, while measures are computed on the fly during visualization based on user interactions. Calculated columns are used to create new static columns based on existing data, while measures are used for dynamic aggregations and calculations.",
      },
      {
        que: "What are the considerations for choosing between DirectQuery and import data modes in Power BI?",
        ans: "DirectQuery is suitable for large datasets or scenarios requiring real-time data access, while import mode is preferable for smaller datasets or when performance and offline access are priorities. Considerations include data source size, refresh frequency, and performance requirements.",
      },
      {
        que: "How can you implement dynamic security in Power BI?",
        ans: "Dynamic security in Power BI is implemented using DAX expressions to filter data based on user roles or criteria. It involves creating role-based security roles in Power BI Desktop and defining DAX filters that dynamically restrict data access based on user context or attributes.",
      },
      {
        que: "What is the purpose of a Power BI template file (.pbit), and how do you use it?",
        ans: "A Power BI template file (.pbit) is used to package report layouts, data models, and queries for reuse or sharing. It allows users to create standardized report templates with predefined visuals and data connections, making it easier to create new reports based on a common structure.",
      },
      {
        que: "How do you optimize data model performance in Power BI?",
        ans: "Data model performance in Power BI can be optimized by reducing data model complexity, removing unnecessary columns and relationships, using incremental data refresh, and optimizing DAX calculations. Additionally, aggregations and partitions can be utilized to improve query performance for large datasets.",
      },
      {
        que: "What is the role of row-level security (RLS) in Power BI, and how do you implement it?",
        ans: "Row-level security (RLS) in Power BI restricts data access based on user roles or criteria, ensuring that users only see relevant data. It is implemented by defining security roles in Power BI Desktop and creating DAX filters that dynamically control data visibility based on user context.",
      },
      {
        que: "What are the benefits of using Power BI Report Server, and in what scenarios would you use it?",
        ans: "Power BI Report Server allows for on-premises hosting and management of Power BI reports, providing greater control and security over data. It is used in scenarios where organizations require strict compliance or regulations that prohibit data hosting in the cloud or where internet connectivity is limited.",
      },
      {
        que: "Explain the role of the Power BI API and how it can be used.",
        ans: "The Power BI API allows developers to programmatically interact with Power BI service, enabling automation, embedding, and customization of Power BI features. It can be used to perform tasks such as managing workspaces, datasets, reports, and embedding Power BI content into custom applications or websites.",
      },
      {
        que: "What are the differences between a calculated column and a calculated table in Power BI?",
        ans: "A calculated column is created within an existing table and computes values for each row, while a calculated table is a new table generated based on DAX expressions. Calculated columns add static columns to an existing table, while calculated tables dynamically generate new tables based on specified conditions.",
      },
      {
        que: "How do you create and use hierarchies in Power BI?",
        ans: "Hierarchies in Power BI are created by organizing related fields into levels of granularity, allowing for drill-down analysis and navigation. They can be created in Power BI Desktop by dragging and dropping fields onto each other to define parent-child relationships, which can then be used in visualizations to explore data hierarchically.",
      },
      {
        que: "What is the purpose of the Power BI paginated report, and how does it differ from other report types?",
        ans: "Power BI paginated reports are designed for pixel-perfect printing and exporting, with support for precise layout control and high-volume data sets. Unlike interactive Power BI reports, paginated reports are intended for structured, paginated output similar to traditional paper reports or PDF documents.",
      },
      {
        que: "Explain how you can use Power BI dataflows to enhance data preparation processes.",
        ans: "Power BI dataflows allow for self-service data preparation by providing a scalable and reusable data preparation layer. They enable users to ingest, transform, enrich, and store data in Azure Data Lake Storage Gen2, promoting data consistency, collaboration, and governance across multiple Power BI datasets and reports.",
      },
      {
        que: "What is the purpose of the Power BI XMLA endpoint, and how does it enable enterprise-level BI solutions?",
        ans: "The Power BI XMLA endpoint allows for direct connectivity to Power BI datasets using industry-standard protocols such as XMLA. It enables integration with third-party BI tools, advanced analytics platforms, and on-premises data sources, extending the reach of Power BI and facilitating enterprise-level BI solutions.",
      },
      {
        que: "How do you use Power BI apps for content distribution and consumption?",
        ans: "Power BI apps package related dashboards, reports, and datasets into a single package for easy distribution and consumption. They can be shared with specific users or groups within an organization, providing a streamlined experience for accessing and exploring curated Power BI content.",
      },
      {
        que: "Explain the concept of cross-filtering in Power BI and how it impacts visualizations.",
        ans: "Cross-filtering in Power BI occurs when selecting data points in one visualization filters data in other visualizations on the same report page. It enables dynamic interactions between visuals, allowing users to explore relationships and trends across different data elements.",
      },
      {
        que: "What are the advantages of using Power BI Embedded compared to traditional Power BI Service?",
        ans: "Power BI Embedded allows developers to embed interactive Power BI reports and dashboards directly into custom applications or websites. It provides greater flexibility and control over the user experience, enabling seamless integration of analytics capabilities within existing applications or portals.",
      },
      {
        que: "How can you implement time intelligence calculations in Power BI?",
        ans: "Time intelligence calculations in Power BI involve using DAX functions such as TOTALYTD, SAMEPERIODLASTYEAR, and DATESBETWEEN to analyze data trends over time. These calculations enable comparisons, year-to-date calculations, and moving averages for time-based data analysis.",
      },
      {
        que: "Explain the purpose of the Power BI REST API and how it can be used.",
        ans: "The Power BI REST API allows developers to programmatically interact with Power BI resources such as datasets, reports, and workspaces. It enables automation of administrative tasks, embedding of Power BI content in custom applications, and integration with other services and platforms.",
      },
      {
        que: "What is the role of Power BI dataflows in data preparation processes, and how do they differ from Power Query Editor?",
        ans: "Power BI dataflows provide a cloud-based data preparation solution that allows users to build reusable data transformations and enrichments. Unlike Power Query Editor, which operates within Power BI Desktop, dataflows enable data preparation at scale and support collaboration and governance across multiple datasets and reports.",
      },
      {
        que: "How do you implement drill-through functionality in Power BI, and what are its benefits?",
        ans: "Drill-through functionality in Power BI allows users to navigate from a summary report to a detailed report by clicking on specific data points. It enables deeper analysis and exploration of data by providing contextually relevant information in a separate report page, enhancing the interactive user experience.",
      },
      {
        que: "Explain the concept of Power BI Dataflows compute engine and its advantages.",
        ans: "The Power BI Dataflows compute engine is a server-side processing engine that performs data preparation operations such as data transformation, enrichment, and aggregation in the cloud. It provides scalability, performance optimization, and parallel processing capabilities for large-scale data preparation tasks, enhancing efficiency and reducing processing time.",
      },
      {
        que: "How do you handle data refresh failures in Power BI, and what are common troubleshooting steps?",
        ans: "Data refresh failures in Power BI can be handled by identifying the root cause, such as data source connectivity issues or data model errors, and taking corrective actions. Common troubleshooting steps include verifying data source credentials, reviewing query performance, and checking for data model integrity.",
      },
      {
        que: "What are the considerations for choosing between Power BI Premium and Power BI Pro licenses?",
        ans: "Power BI Premium licenses are suitable for organizations with high user concurrency, large datasets, or advanced analytics requirements, offering dedicated capacity and enhanced performance features. Power BI Pro licenses are suitable for individual users or small teams with basic reporting and collaboration needs, providing access to core Power BI features.",
      },
      {
        que: "Explain how to implement dynamic tooltips in Power BI visuals, and what benefits do they offer?",
        ans: "Dynamic tooltips in Power BI visuals allow users to display additional information or context-specific details when hovering over data points. They enhance data exploration and analysis by providing on-demand insights and eliminating the need for cluttered visualizations with excessive labels or annotations.",
      },
      {
        que: "What is the role of Power BI Paginated Reports and how do they differ from Power BI Interactive Reports?",
        ans: "Power BI Paginated Reports are designed for pixel-perfect printing and support high-volume data sets with precise layout control. They differ from Power BI Interactive Reports, which are optimized for interactive data exploration and visualization with dynamic filtering, slicing, and drill-down capabilities.",
      },
      {
        que: "How do you handle data security and privacy considerations in Power BI?",
        ans: "Data security and privacy considerations in Power BI can be addressed by implementing row-level security (RLS), encrypting sensitive data, enforcing data access policies, and restricting sharing and publishing permissions. Additionally, compliance with regulatory requirements such as GDPR or HIPAA should be ensured.",
      },
      {
        que: "Explain how to implement custom visuals in Power BI, and what benefits do they offer?",
        ans: "Custom visuals in Power BI are created using JavaScript libraries such as D3.js or Chart.js and enable developers to extend Power BI's visualization capabilities. They offer flexibility, creativity, and specialized chart types that may not be available in standard Power BI visuals, allowing for enhanced data storytelling and analysis.",
      },
      {
        que: "What is the purpose of the Power BI Desktop Model view, and how does it aid in data modeling?",
        ans: "The Model view in Power BI Desktop provides a graphical representation of the data model, including tables, relationships, and measures. It aids in data modeling by allowing users to visualize and manipulate the structure of the data model, define relationships, and create calculated columns and measures for analysis.",
      },
      {
        que: "Explain the role of aggregations in Power BI data modeling, and how are they implemented?",
        ans: "Aggregations in Power BI data modeling enable pre-computation and storage of summarized data for improved query performance. They are implemented by defining aggregate tables that store aggregated values at different levels of granularity and configuring relationships between aggregate and detail tables for query optimization.",
      },
      {
        que: "What is the purpose of the Power BI data lineage view, and how does it help in data governance?",
        ans: "The Power BI data lineage view provides a visual representation of data source connections, transformations, and dependencies within a Power BI solution. It helps in data governance by enabling users to track data lineage, understand data flows, and ensure data quality and compliance.",
      },
      {
        que: "Explain how to implement role-playing dimensions in Power BI and why they are useful.",
        ans: "Role-playing dimensions in Power BI involve creating multiple instances of the same dimension table to analyze data from different perspectives or scenarios. They are useful for scenarios such as analyzing sales performance by different date dimensions (e.g., order date, ship date, delivery date) without duplicating data or creating complex relationships.",
      },
      {
        que: "What is the purpose of aggregations in Power BI, and how do you configure them?",
        ans: "Aggregations in Power BI are used to improve query performance by pre-calculating and storing summarized data at various levels of granularity. They are configured by defining aggregation tables with summarized measures and relationships to detail tables, optimizing query execution for large datasets and complex analytical queries.",
      },
      {
        que: "Explain the concept of Power BI composite models and when you would use them.",
        ans: "Power BI composite models allow combining imported and DirectQuery data sources within the same data model, enabling hybrid data connectivity and analysis. They are used when some data sources require real-time access (DirectQuery) while others can be pre-aggregated and imported (import mode), providing flexibility and performance optimization for diverse data scenarios.",
      },
      {
        que: "How do you implement and manage data lineage tracking in Power BI?",
        ans: "Data lineage tracking in Power BI involves documenting data source connections, transformations, and dependencies using tools such as Power BI lineage view, external metadata management systems, or custom documentation processes. It requires establishing data governance policies, maintaining metadata catalogs, and ensuring data lineage accuracy and transparency.",
      },
      {
        que: "What are the considerations for choosing between Power BI Embedded and Power BI Premium capacities?",
        ans: "Power BI Embedded is suitable for embedding interactive Power BI reports and dashboards within custom applications or websites, offering per-session pricing and scalability based on usage. Power BI Premium capacities provide dedicated resources and enhanced performance features for organizations with high user concurrency or large-scale deployments, offering predictable pricing and governance controls.",
      },
      {
        que: "Explain the purpose of the Power BI XMLA endpoint and how it enables advanced analytics scenarios.",
        ans: "The Power BI XMLA endpoint allows direct connectivity to Power BI datasets using industry-standard XMLA protocols, enabling integration with third-party analytics tools, multidimensional analysis services, and custom analytical solutions. It facilitates advanced analytics scenarios such as real-time data analysis, predictive modeling, and integration with on-premises data sources.",
      },
      {
        que: "How do you implement and manage data lineage tracking in Power BI?",
        ans: "Data lineage tracking in Power BI involves documenting data source connections, transformations, and dependencies using tools such as Power BI lineage view, external metadata management systems, or custom documentation processes. It requires establishing data governance policies, maintaining metadata catalogs, and ensuring data lineage accuracy and transparency.",
      },
      {
        que: "What is the purpose of Power BI deployment pipelines, and how do they streamline the deployment process?",
        ans: "Power BI deployment pipelines enable continuous integration and deployment (CI/CD) of Power BI content, including datasets, reports, and dashboards, across different environments such as development, testing, and production. They streamline the deployment process by automating content promotion, version control, and release management, ensuring consistency and reliability in Power BI solution deployments.",
      },
      {
        que: "Explain how you can implement conditional formatting in Power BI visuals.",
        ans: "Conditional formatting in Power BI visuals allows users to dynamically change visual appearance based on specified conditions or rules. It can be implemented by configuring formatting options in visual properties or by using DAX expressions to define conditional formatting logic, providing insights into data trends, outliers, or exceptions through visual cues.",
      },
      {
        que: "What is the purpose of Power BI paginated reports, and how do they differ from interactive reports?",
        ans: "Power BI paginated reports are designed for pixel-perfect printing and support high-volume data sets with precise layout control. They differ from interactive reports, which are optimized for ad-hoc data exploration and visualization with dynamic filtering, slicing, and drill-down capabilities, providing options for structured reporting and distribution of operational or regulatory reports.",
      },
      {
        que: "How do you implement row-level security (RLS) in Power BI, and what are the best practices?",
        ans: "Row-level security (RLS) in Power BI is implemented by defining security roles with DAX filters that restrict data access based on user roles or criteria. Best practices include using role-based security roles, testing security configurations thoroughly, monitoring user access and data usage, and regularly reviewing and updating security policies to ensure compliance and data protection.",
      },
      {
        que: "Explain the concept of Power BI app workspaces and their role in content collaboration.",
        ans: "Power BI app workspaces are collaborative environments where teams can create, share, and manage Power BI content such as datasets, reports, and dashboards. They provide a centralized platform for content collaboration, version control, and content distribution, enabling teams to work together on data projects and share insights with stakeholders.",
      },
      {
        que: "What are the benefits of using Power BI Dataflows for data preparation, and how do they differ from Power Query Editor?",
        ans: "Power BI Dataflows provide a cloud-based data preparation solution that enables self-service data ingestion, transformation, and enrichment at scale. They differ from Power Query Editor, which operates within Power BI Desktop, by providing centralized data preparation, data lineage tracking, and integration with Azure Data Lake Storage Gen2, facilitating data governance, collaboration, and reuse across multiple datasets and reports.",
      },
      {
        que: "Explain the concept of Power BI AI visuals and their role in advanced analytics scenarios.",
        ans: "Power BI AI visuals leverage artificial intelligence and machine learning capabilities to analyze data trends, detect anomalies, and generate insights automatically. They enable advanced analytics scenarios such as predictive forecasting, sentiment analysis, and image recognition, empowering users to uncover hidden patterns, make data-driven decisions, and gain competitive advantages.",
      }
    // Add more terms as needed
  ];

  return (
    <>
      <Head>
      <title>Microsoft Power BI Interview Question | Unstop Computer</title>
        <meta name="description" content="Here, you'll find a treasure trove of questions covering everything from programming languages to power bi" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="Keywords"
          content="HTML,Unstop Computer.in,UnstopComputers, Unstop Computer, UnstopComputers.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"
        />
        <link
          rel="canonical"
          href="https://unstopcomputer.tech/interview-question/powerbi"
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.tech/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:title"
          content="Microsoft Power BI Interview Question | Unstop Computer"
        />
       <meta property="og:description" content="Here, you'll find a treasure trove of questions covering everything from programming languages to power bi" />
      </Head>
      <QueLayout>
        <section id="content-wrapper">
          <div className="row">
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col">
                <div className="lg:flex-grow lg:pr-24 md:pr-14 flex flex-col md:items-start md:text-left md:mb-0">
                  <div className="relative xl:container">
                    <h2 className=" text-blue-700 text-2xl sm:text-xl md:text-5xl lg:text-center xl:text-4l dark:text-blue">
                      Power BI Interview Questions and Answer{" "}
                    </h2>{" "}
                    <br className="lg:block hidden" />
                  </div>
                  <p className="mt-2">
                    Here are Microsoft Power BI Top interview questions along with their
                    correct answers..{" "}
                  </p>
                </div>
              </div>
              <div className="max-w-screen-lg mx-auto p-4">
                <div className="w-full table-auto">
                  {termsData.map((term, index) => (
                    <div
                      key={index + 1}
                      class="flex flex-col gap-4 p-3 mt-7 shadow-xl"
                    >
                      <div class="flex justify justify-between">
                        <div class="flex gap-auto">
                          <div class="w-7 h-7 text-center rounded-full bg-blue-700 mr-6 text-white">
                            {index + 1}
                          </div>
                          <span className="font-bold">{term.que}</span>
                        </div>
                      </div>
                      <div className="m-3">
                        Ans.
                        <span className="ml-2">{term.ans}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </QueLayout>
    </>
  );
};

export default GlossaryTable;
