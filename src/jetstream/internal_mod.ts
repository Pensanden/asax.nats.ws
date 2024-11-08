/*
 * Copyright 2023-2024 The NATS Authors
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export { checkJsError, isFlowControlMsg, isHeartbeatMsg } from "./jsutil";

export {
  AdvisoryKind,
  consumerOpts,
  DirectMsgHeaders,
  isConsumerOptsBuilder,
  JsHeaders,
  KvWatchInclude,
  RepublishHeaders,
} from "./types";

export type {
  Advisory,
  Closed,
  ConsumerInfoable,
  ConsumerOpts,
  ConsumerOptsBuilder,
  Consumers,
  Destroyable,
  JetStreamClient,
  JetStreamManager,
  JetStreamManagerOptions,
  JetStreamOptions,
  JetStreamPublishOptions,
  JetStreamPullSubscription,
  JetStreamSubscription,
  JetStreamSubscriptionInfoable,
  JetStreamSubscriptionOptions,
  JsMsgCallback,
  KV,
  KvCodec,
  KvCodecs,
  KvDeleteOptions,
  KvEntry,
  KvLimits,
  KvOptions,
  KvPutOptions,
  KvStatus,
  KvWatchOptions,
  ObjectInfo,
  ObjectResult,
  ObjectStore,
  ObjectStoreLink,
  ObjectStoreMeta,
  ObjectStoreMetaOptions,
  ObjectStoreOptions,
  ObjectStorePutOpts,
  ObjectStoreStatus,
  PubAck,
  Pullable,
  RoKV,
  StoredMsg,
  Stream,
  StreamAPI,
  Streams,
  Views,
} from "./types.ts";

export type { StreamNames } from "./jsbaseclient_api";
export type {
  AccountLimits,
  ApiPagedRequest,
  ClusterInfo,
  ConsumerConfig,
  ConsumerInfo,
  ConsumerUpdateConfig,
  ExternalStream,
  JetStreamAccountStats,
  JetStreamApiStats,
  JetStreamUsageAccountLimits,
  LastForMsgRequest,
  LostStreamData,
  MsgDeleteRequest,
  MsgRequest,
  PeerInfo,
  Placement,
  PullOptions,
  PurgeBySeq,
  PurgeBySubject,
  PurgeOpts,
  PurgeResponse,
  PurgeTrimOpts,
  Republish,
  SeqMsgRequest,
  SequenceInfo,
  StreamAlternate,
  StreamConfig,
  StreamConsumerLimits,
  StreamInfo,
  StreamSource,
  StreamSourceInfo,
  StreamState,
  StreamUpdateConfig,
  SubjectTransformConfig,
} from "./jsapi_types.ts";

export type { JsMsg } from "./jsmsg";
export type { Lister } from "./jslister";

export {
  AckPolicy,
  DeliverPolicy,
  DiscardPolicy,
  ReplayPolicy,
  RetentionPolicy,
  StorageType,
  StoreCompression,
} from "./jsapi_types";

export type { ConsumerAPI } from "./jsmconsumer_api";
export type { DeliveryInfo, StreamInfoRequestOptions } from "./jsapi_types";

export type {
  AbortOnMissingResource,
  Bind,
  ConsumeBytes,
  ConsumeCallback,
  ConsumeMessages,
  ConsumeOptions,
  Consumer,
  ConsumerCallbackFn,
  ConsumerMessages,
  ConsumerStatus,
  Expires,
  FetchBytes,
  FetchMessages,
  FetchOptions,
  IdleHeartbeat,
  MaxBytes,
  MaxMessages,
  NextOptions,
  OrderedConsumerOptions,
  ThresholdBytes,
  ThresholdMessages,
} from "./consumer.ts";
export { ConsumerDebugEvents, ConsumerEvents } from "./consumer";
