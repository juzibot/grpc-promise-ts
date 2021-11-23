/**
 *       ***************************************
 *          AUTOGENERATED FILE - DO NOT EDIT
 *       ***************************************
 *
 * This file was generated by grpc-tools-node-protoc-promise-ts
 * https://github.com/rhinodavid/grpc-tools-node-protoc-promise-ts
 *
 * package:
 * file: test.proto
 * generated at: Thu Apr 23 2020 02:31:35 GMT-0600 (Mountain Daylight Time)
 */

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as test_pb from "./test_pb";
import { TClientStreamingRpc, TUnaryRpc } from "grpc-promise-ts";

interface ITestService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  unary: ITestService_Iunary;
  bidirectional: ITestService_Ibidirectional;
}

interface ITestService_Iunary
  extends grpc.MethodDefinition<test_pb.TestRequest, test_pb.TestResponse> {
  path: string; // "/.Test/unary"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<test_pb.TestRequest>;
  requestDeserialize: grpc.deserialize<test_pb.TestRequest>;
  responseSerialize: grpc.serialize<test_pb.TestResponse>;
  responseDeserialize: grpc.deserialize<test_pb.TestResponse>;
}
interface ITestService_Ibidirectional
  extends grpc.MethodDefinition<test_pb.TestRequest, test_pb.TestResponse> {
  path: string; // "/.Test/bidirectional"
  requestStream: boolean; // true
  responseStream: boolean; // true
  requestSerialize: grpc.serialize<test_pb.TestRequest>;
  requestDeserialize: grpc.deserialize<test_pb.TestRequest>;
  responseSerialize: grpc.serialize<test_pb.TestResponse>;
  responseDeserialize: grpc.deserialize<test_pb.TestResponse>;
}

export const TestService: ITestService;

export interface ITestServer {
  unary: grpc.handleUnaryCall<test_pb.TestRequest, test_pb.TestResponse>;
  bidirectional: grpc.handleBidiStreamingCall<
    test_pb.TestRequest,
    test_pb.TestResponse
  >;
}

export interface ITestClient {
  unary(
    request: test_pb.TestRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: test_pb.TestResponse
    ) => void
  ): grpc.ClientUnaryCall;
  unary(
    request: test_pb.TestRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: test_pb.TestResponse
    ) => void
  ): grpc.ClientUnaryCall;
  unary(
    request: test_pb.TestRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: test_pb.TestResponse
    ) => void
  ): grpc.ClientUnaryCall;
  bidirectional(): grpc.ClientDuplexStream<
    test_pb.TestRequest,
    test_pb.TestResponse
  >;
  bidirectional(
    options: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<test_pb.TestRequest, test_pb.TestResponse>;
  bidirectional(
    metadata: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<test_pb.TestRequest, test_pb.TestResponse>;
}

export class TestClient extends grpc.Client implements ITestClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public unary(
    request: test_pb.TestRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: test_pb.TestResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public unary(
    request: test_pb.TestRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: test_pb.TestResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public unary(
    request: test_pb.TestRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: test_pb.TestResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public bidirectional(
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<test_pb.TestRequest, test_pb.TestResponse>;
  public bidirectional(
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<test_pb.TestRequest, test_pb.TestResponse>;
}

/**
 * Interface and class to declare a Test client that has been promisifyed with the
 * `grpc-promise-ts` (https://github.com/rhinodavid/grpc-promise-ts) package
 */
export interface ITestPromiseClient {
  unary: TUnaryRpc<test_pb.TestRequest, test_pb.TestResponse>;
  bidirectional(
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<test_pb.TestRequest, test_pb.TestResponse>;
}
export class TestPromiseClient extends grpc.Client
  implements ITestPromiseClient {
  // This class cannot be directly instantiated.
  // To get an instance of TestPromiseClient, first create
  // a TestClient and then pass it to the `convertToPromiseClient`
  // function in the `gprc-promise-ts` package
  public unary: TUnaryRpc<test_pb.TestRequest, test_pb.TestResponse>;
  public bidirectional(
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientDuplexStream<test_pb.TestRequest, test_pb.TestResponse>;
}
