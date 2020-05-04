(function() {var implementors = {};
implementors["byteorder"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"byteorder/enum.BigEndian.html\" title=\"enum byteorder::BigEndian\">BigEndian</a>","synthetic":true,"types":["byteorder::BigEndian"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"byteorder/enum.LittleEndian.html\" title=\"enum byteorder::LittleEndian\">LittleEndian</a>","synthetic":true,"types":["byteorder::LittleEndian"]}];
implementors["generic_array"] = [{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["generic_array::GenericArray"]},{"text":"impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"generic_array/iter/struct.GenericArrayIter.html\" title=\"struct generic_array::iter::GenericArrayIter\">GenericArrayIter</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"generic_array/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type generic_array::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["generic_array::iter::GenericArrayIter"]}];
implementors["hash32"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hash32/struct.FnvHasher.html\" title=\"struct hash32::FnvHasher\">Hasher</a>","synthetic":true,"types":["hash32::fnv::Hasher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hash32/struct.Murmur3Hasher.html\" title=\"struct hash32::Murmur3Hasher\">Hasher</a>","synthetic":true,"types":["hash32::murmur3::Hasher"]},{"text":"impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hash32/struct.BuildHasherDefault.html\" title=\"struct hash32::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["hash32::BuildHasherDefault"]}];
implementors["heapless"] = [{"text":"impl&lt;K, V, N, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/struct.IndexMap.html\" title=\"struct heapless::IndexMap\">IndexMap</a>&lt;K, V, N, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;Bucket&lt;K, V&gt;&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Pos&gt;&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::indexmap::IndexMap"]},{"text":"impl&lt;T, N, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/struct.IndexSet.html\" title=\"struct heapless::IndexSet\">IndexSet</a>&lt;T, N, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;Bucket&lt;T, ()&gt;&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Pos&gt;&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::indexset::IndexSet"]},{"text":"impl&lt;K, V, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/struct.LinearMap.html\" title=\"struct heapless::LinearMap\">LinearMap</a>&lt;K, V, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;(K, V)&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::linear_map::LinearMap"]},{"text":"impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;u8&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::string::String"]},{"text":"impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::vec::Vec"]},{"text":"impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/struct.HistoryBuffer.html\" title=\"struct heapless::HistoryBuffer\">HistoryBuffer</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::histbuf::HistoryBuffer"]},{"text":"impl&lt;T, N, KIND&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/binary_heap/struct.BinaryHeap.html\" title=\"struct heapless::binary_heap::BinaryHeap\">BinaryHeap</a>&lt;T, N, KIND&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;KIND: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::binary_heap::BinaryHeap"]},{"text":"impl&lt;'a, T, N, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/binary_heap/struct.PeekMut.html\" title=\"struct heapless::binary_heap::PeekMut\">PeekMut</a>&lt;'a, T, N, K&gt;","synthetic":true,"types":["heapless::binary_heap::PeekMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"heapless/binary_heap/enum.Min.html\" title=\"enum heapless::binary_heap::Min\">Min</a>","synthetic":true,"types":["heapless::binary_heap::Min"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"heapless/binary_heap/enum.Max.html\" title=\"enum heapless::binary_heap::Max\">Max</a>","synthetic":true,"types":["heapless::binary_heap::Max"]},{"text":"impl&lt;A, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/i/struct.BinaryHeap.html\" title=\"struct heapless::i::BinaryHeap\">BinaryHeap</a>&lt;A, K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::i::BinaryHeap"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/i/struct.LinearMap.html\" title=\"struct heapless::i::LinearMap\">LinearMap</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::i::LinearMap"]},{"text":"impl&lt;A, U, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/i/struct.Queue.html\" title=\"struct heapless::i::Queue\">Queue</a>&lt;A, U, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::i::Queue"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/i/struct.String.html\" title=\"struct heapless::i::String\">String</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::i::String"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/i/struct.Vec.html\" title=\"struct heapless::i::Vec\">Vec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::i::Vec"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/mpmc/struct.Q2.html\" title=\"struct heapless::mpmc::Q2\">Q2</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::mpmc::Q2"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/mpmc/struct.Q4.html\" title=\"struct heapless::mpmc::Q4\">Q4</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::mpmc::Q4"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/mpmc/struct.Q8.html\" title=\"struct heapless::mpmc::Q8\">Q8</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::mpmc::Q8"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/mpmc/struct.Q16.html\" title=\"struct heapless::mpmc::Q16\">Q16</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::mpmc::Q16"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/mpmc/struct.Q32.html\" title=\"struct heapless::mpmc::Q32\">Q32</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::mpmc::Q32"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/mpmc/struct.Q64.html\" title=\"struct heapless::mpmc::Q64\">Q64</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::mpmc::Q64"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/pool/struct.Node.html\" title=\"struct heapless::pool::Node\">Node</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::pool::stack::Node"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/pool/struct.Pool.html\" title=\"struct heapless::pool::Pool\">Pool</a>&lt;T&gt;","synthetic":true,"types":["heapless::pool::Pool"]},{"text":"impl&lt;T, STATE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/pool/struct.Box.html\" title=\"struct heapless::pool::Box\">Box</a>&lt;T, STATE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;STATE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::pool::Box"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"heapless/pool/enum.Uninit.html\" title=\"enum heapless::pool::Uninit\">Uninit</a>","synthetic":true,"types":["heapless::pool::Uninit"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"heapless/pool/enum.Init.html\" title=\"enum heapless::pool::Init\">Init</a>","synthetic":true,"types":["heapless::pool::Init"]},{"text":"impl&lt;POOL, STATE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/pool/singleton/struct.Box.html\" title=\"struct heapless::pool::singleton::Box\">Box</a>&lt;POOL, STATE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;POOL: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;STATE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::pool::singleton::Box"]},{"text":"impl&lt;'a, T, N, U, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/spsc/struct.Consumer.html\" title=\"struct heapless::spsc::Consumer\">Consumer</a>&lt;'a, T, N, U, C&gt;","synthetic":true,"types":["heapless::spsc::split::Consumer"]},{"text":"impl&lt;'a, T, N, U, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/spsc/struct.Producer.html\" title=\"struct heapless::spsc::Producer\">Producer</a>&lt;'a, T, N, U, C&gt;","synthetic":true,"types":["heapless::spsc::split::Producer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/spsc/struct.MultiCore.html\" title=\"struct heapless::spsc::MultiCore\">MultiCore</a>","synthetic":true,"types":["heapless::spsc::MultiCore"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/spsc/struct.SingleCore.html\" title=\"struct heapless::spsc::SingleCore\">SingleCore</a>","synthetic":true,"types":["heapless::spsc::SingleCore"]},{"text":"impl&lt;T, N, U, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/spsc/struct.Queue.html\" title=\"struct heapless::spsc::Queue\">Queue</a>&lt;T, N, U, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"heapless/trait.ArrayLength.html#associatedtype.ArrayType\" title=\"type heapless::ArrayLength::ArrayType\">ArrayType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["heapless::spsc::Queue"]},{"text":"impl&lt;'a, T, N, U, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/spsc/struct.Iter.html\" title=\"struct heapless::spsc::Iter\">Iter</a>&lt;'a, T, N, U, C&gt;","synthetic":true,"types":["heapless::spsc::Iter"]},{"text":"impl&lt;'a, T, N, U, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"heapless/spsc/struct.IterMut.html\" title=\"struct heapless::spsc::IterMut\">IterMut</a>&lt;'a, T, N, U, C&gt;","synthetic":true,"types":["heapless::spsc::IterMut"]}];
implementors["typenum"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/struct.Greater.html\" title=\"struct typenum::Greater\">Greater</a>","synthetic":true,"types":["typenum::Greater"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/struct.Less.html\" title=\"struct typenum::Less\">Less</a>","synthetic":true,"types":["typenum::Less"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/struct.Equal.html\" title=\"struct typenum::Equal\">Equal</a>","synthetic":true,"types":["typenum::Equal"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":true,"types":["typenum::bit::B0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>","synthetic":true,"types":["typenum::bit::B1"]},{"text":"impl&lt;U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["typenum::int::PInt"]},{"text":"impl&lt;U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["typenum::int::NInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>","synthetic":true,"types":["typenum::int::Z0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":true,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;U, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;U, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["typenum::uint::UInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>","synthetic":true,"types":["typenum::array::ATerm"]},{"text":"impl&lt;V, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["typenum::array::TArr"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()