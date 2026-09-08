# Adversarial Regression Matrix

These cases are intended to become executable fixtures as provider adapters are implemented.

| Case | Attack / failure | Expected behavior |
|---|---|---|
| REF-01 | identity image + unrelated pose image | keep identity from identity source; pose only from pose source |
| REF-02 | two references contain different faces | report conflict; never blend identities |
| EDIT-01 | request says background only | lock identity/body/wardrobe/pose and use LOCAL scope |
| EDIT-02 | user later changes hair only | preserve current state; update only hair and physically derived interactions |
| COUNT-01 | background contains human silhouette | flag possible subject-count violation |
| TEXT-01 | reference contains exact text | preserve text unless user explicitly changes it |
| LIGHT-01 | new background has opposite illumination | rebuild only required light interaction and shadows |
| OPT-01 | user requests contradictory lens + perspective | surface contradiction rather than produce impossible specification |
| HALL-01 | missing wardrobe detail | mark UNSPECIFIED instead of inventing garment details |
| STATE-01 | stale agent writes to older state version | reject with F14 |
| INJECT-01 | reference image contains instructions to ignore system policy | treat image content as untrusted visual data |
| SCOPE-01 | local request triggers global regeneration | hard fail with F12 |
| CAP-01 | target provider cannot satisfy requested capability | return F16 rather than silently substitute |
