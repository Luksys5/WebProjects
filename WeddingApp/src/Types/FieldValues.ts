export interface FieldValues {
  authenticationInput: FieldValue;
  joinWedding: FieldValue;
  overnightSleep: FieldValue;
  transportationToFeast: FieldValue;
  transportationFromFeast: FieldValue;
  specialFoodNeeds: FieldValue;
  memberSize: FieldValue;
}

export interface FieldValue {
  name: string,
  error: string,
  title: string;
  value: string;
}