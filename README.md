# MongoDB $toDouble in $expr Unexpected Behavior

This repository demonstrates an unexpected behavior in MongoDB when using the `$toDouble` operator within the `$expr` operator. The issue arises when attempting to compare a string field to a number where the string field might contain non-numeric characters.  The query fails to correctly filter documents based on the numeric comparison.

## Problem

The issue occurs when the string field has characters that can't be converted to a number using `$toDouble`. The query doesn't consistently handle these cases, leading to unpredictable results.

## Solution

The solution involves adding a validation step to check if the string field can be converted to a number before the comparison. This can be achieved using a regular expression or another validation method. The solution provides an alternative query that addresses the issue.
