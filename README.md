# ProductTaskTest

AWS AppSync using a managed GraphQL service for application data and a back-end for mobile applications.
<hr>

<h3><b>Introduction</b></h3>
<hr>

This is a Starter React Native application for using the Sample app in the AWS AppSync console when building your GraphQL API. The Sample app creates a GraphQL schema and provisions Amazon DynamoDB resources, then connects them appropriately with Resolvers. The application demonstrates GraphQL Mutations, Queries and Subscriptions using AWS AppSync.

Features

<span style="font-size: 18px; font-family: verdana; font-weight: 600;">GraphQL Mutations:</span><br>

<ul>
  <li>Create new category and product.</li>
  <li>Update category and product.</li>
  <li>Delete category and product.</li>
</ul>

<span style="font-size: 18px; font-family: verdana; font-weight: 600;">GraphQL Queries:</span><br>

<ul>
  <li>get all category and product.</li>
</ul>

<span style="font-size: 18px; font-family: verdana; font-weight: 600;">GraphQL Subscriptions:</span><br>

<ul>
  <li>Real time updates.</li>
</ul>

<span style="font-size: 18px; font-family: verdana; font-weight: 600;">Authorization:</span><br>

<ul>
  <li>The app uses API Key as the authoriation mechanism.</li>
</ul>

# AWS Setup
<ol>
  <li>Navigate to the AWS AppSync console using the URL: http://console.aws.amazon.com/appsync/home</li>
  <li>Click on Create API and select the Sample Schema option. Enter a API name of your choice. Click Create.</li>
</ol>

# AWS GraphQL API Reference

https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js#using-graphql-transformers

https://docs.amplify.aws/start/getting-started/data-model/q/integration/react-native
