import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="w-[640px] lg:w-auto">
        <h1 className="text-center text-3xl font-semibold text-white mt-3 p-2 bg-yellow-600 ml-16 lg:ml-0 w-[640px] lg:w-full">
          Some Important Questions with Answers
        </h1>
        <div className="card w-[640px] lg:w-[1400px] bg-slate-200 shadow-xl mx-auto mt-3 ml-16 lg:ml-44">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p>
              <span className="text-xl text-emerald-700 font-bold">
                Answer: <br></br>
              </span>
              <span className="font-bold ">1. Access Token: </span>
              <p>
                An access token is a credential that is used to access protected
                resources in an application or API. It is typically a
                short-lived token issued by an authentication server upon
                successful authentication and is included in subsequent API
                requests as proof of authorization. Access tokens are often
                bearer tokens, meaning they grant access to resources without
                requiring additional authentication.
              </p>
              <div className="mt-3">
                {" "}
                <span className="font-bold">2. Refresh Token: </span>
                <p>
                  A refresh token is a long-lived token that is used to obtain a
                  new access token once the original access token expires. It is
                  issued alongside the access token during authentication and is
                  securely stored on the client-side (e.g., browser, mobile
                  app). When the access token expires, the client can use the
                  refresh token to request a new access token from the
                  authentication server without requiring the user to
                  reauthenticate. Refresh tokens are typically more secure and
                  have a longer lifespan than access tokens.
                </p>{" "}
              </div>
            </p>
            <p className="font-bold">How they work: </p>
            <p>
              <span className="font-semibold">1. Authentication:</span> When a
              user or application successfully authenticates with an
              authentication server, the server generates an access token and a
              refresh token.<br></br>
              <span className="font-semibold">2. Access Token Usage:</span> The
              access token is sent with API requests as an authorization header
              or query parameter. The server verifies the access token for each
              request to ensure the requester has the necessary permissions.
              <br></br>
              <span className="font-semibold">
                3. Access Token Expiration:
              </span>{" "}
              Access tokens have a short lifespan and eventually expire to
              enhance security. Once expired, they are no longer valid for
              authentication and need to be refreshed.
            </p>
          </div>
        </div>
        <div className="card w-[640px] lg:w-[1400px] bg-slate-200 shadow-xl mx-auto mt-3 ml-16 lg:ml-44">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              2. What is the differences between SQL & NoSQL databases?
            </h2>
            <p>
              <span className="text-xl text-emerald-700 font-bold">
                Answer: <br></br>
              </span>
              <span className="font-bold ">SQL Databases: </span>
              <p>
                1. Structured data, predefined schemas, and relational model for
                complex relationships. ACID-compliant, ideal for applications
                requiring strong data integrity.<br></br>
                2. SQL language for querying and manipulating data, enforcing
                structured data organization. Well-suited for complex queries
                and transactions.<br></br>
                3. Suitable for applications with structured data, strict data
                consistency requirements, and well-defined relationships between
                entities.
              </p>
              <span className="font-bold ">NoSQL Databases: </span>
              <p>
                1. Schemaless and flexible data structures, suitable for
                evolving data requirements. Variants include key-value,
                document, columnar, and graph databases.<br></br>
                2. Optimized for scalability, high-performance, and handling
                large-scale, distributed data. Eventual consistency and
                prioritization of availability over strong consistency.<br></br>
                3. Agile development, fast iterations, and simpler data
                modeling. Commonly used in big data, real-time analytics, and
                scenarios with flexible data schemas.
              </p>
            </p>
          </div>
        </div>
        <div className="card w-[640px] lg:w-[1400px] bg-slate-200 shadow-xl mx-auto mt-3 ml-16 lg:ml-44">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              3. What is express js? What is Nest JS?
            </h2>
            <p>
              <span className="text-xl text-emerald-700 font-bold">
                Answer: <br></br>
              </span>
              <span className="font-bold ">Express.js: </span>
              <p>
                Express.js is a lightweight and flexible web application
                framework for Node.js. It simplifies the process of building web
                applications and APIs by providing a minimalistic set of
                features for handling HTTP requests, routing, and middleware
                integration.
              </p>
              <span className="font-bold ">NestJS: </span>
              <p>
                NestJS is a progressive, TypeScript-based framework built on top
                of Express.js. It combines the best practices of Angular with
                the simplicity and flexibility of Express, offering a structured
                and scalable approach to building server-side applications.
                NestJS promotes modularity, dependency injection, and follows
                the MVC architectural pattern.
              </p>
            </p>
          </div>
        </div>
        <div className="card w-[640px] lg:w-[1400px] bg-slate-200 shadow-xl mx-auto mt-3 mb-4 ml-16 lg:ml-44">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              4. What is MongoDB aggregate and how does it work?
            </h2>
            <p>
              <span className="text-xl text-emerald-700 font-bold">
                Answer: <br></br>
              </span>
              MongoDB's aggregate is a powerful feature that allows for advanced
              data aggregation and analysis within the database. It provides a
              way to perform complex data manipulations, transformations, and
              computations on MongoDB collections. Using the aggregation
              pipeline, which consists of multiple stages, data can be filtered,
              grouped, sorted, joined, and calculated to derive meaningful
              results.<br></br>
              The aggregation pipeline in MongoDB consists of a series of
              stages, each processing the documents passed from the previous
              stage. Each stage performs a specific operation, such as filtering
              with $match, grouping with $group, sorting with $sort, and
              calculating with various operators like $sum, $avg, and $project.
              These stages can be combined in a flexible manner to create
              sophisticated data processing pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
