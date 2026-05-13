# Visual Demo Design Pass

This records the design-shotgun/prototype pass for the visual examples requested on the voice-agent landing page.

## Variant A: Operational Proof

Focus: show what happens after the call.

- SMS cards for prospect confirmation, internal alert, and soft follow-up.
- Audio player with transcript and waveform.
- Agent profiles by mission.

Decision: implemented. This is the clearest fit for TPE/PME because it shows business output, not AI novelty.

## Variant B: Humanized Agent Gallery

Focus: make each voice agent feel like a named team member.

- Agent avatars.
- Tone, role, status.
- Waveform signature per agent.

Decision: implemented in code-native form. Avoided generated portraits because fake people can reduce trust for a B2B service landing.

## Variant C: Cinematic AI Product Visual

Focus: large generated hero artwork of a phone/voice assistant scene.

Decision: deferred. A bitmap hero could be useful later, but the current page benefits more from functional proof: audio, SMS, lead system, and dashboard.

## UI/UX Constraints Applied

- Touch targets stay above 44px.
- Audio player uses the native browser control for accessibility.
- Text-message blocks are readable on mobile and do not rely on tiny screenshots.
- Motion is decorative only and respects reduced-motion preferences.
- Visual examples are anchored with `#demo-vocale`, `#sms`, and `#agents`.

