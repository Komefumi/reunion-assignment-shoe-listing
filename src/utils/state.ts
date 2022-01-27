import { IPayloadObject } from "@my-types/state";

export function createPayloadObject(innerValue: any): IPayloadObject<typeof innerValue> {
  return {
    payload: innerValue,
  };
}
