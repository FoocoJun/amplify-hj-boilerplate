import { Amplify } from 'aws-amplify';
import outputs from "./amplify_outputs.json";
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

Amplify.configure(outputs);

afterEach(() => {
  cleanup();
})